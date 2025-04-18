import { defineEventHandler, readBody } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
    try {
        // Lire le corps de la requête
        const body = await readBody(event);
        console.log("Request Body:", body);

        if (!body.token) {
            return {
                statusCode: 400,
                body: { message: 'reCAPTCHA token is missing' },
            };
        }

        const token = body.token;
        const secretKey = `${process.env.KEY_RECAP_PRIVATE}`; // Clé secrète

        // Envoyer une requête POST à l'API Google reCAPTCHA pour vérifier le token
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();
        console.log("API Response:", data);

        // Vérifier si le token est valide
        if (!data.success) {
            return {
                statusCode: 400,
                body: { message: `reCAPTCHA verification failed: ${data['error-codes']}` },
            };
        }

        // Si le token est valide, retourner une réponse succès
        return {
            statusCode: 200,
            body: { message: 'reCAPTCHA verified successfully' },
        };
    } catch (error) {
        console.error("Erreur lors de la lecture du corps de la requête:", error);
        return {
            statusCode: 500,
            body: { message: "Erreur interne du serveur" },
        };
    }
});
