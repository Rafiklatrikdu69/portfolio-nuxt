// server/api/email.post.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        if (!body.html && !body.text) {
            throw new Error('Missing html or text content')
        }

        const data = await resend.emails.send({
            from: 'rafik@email.rafik-bouchenna.fr',
            to: ["rafik.bouchenna050@gmail.com"],
            subject: body.subject || 'Nouveau message',
            html: body.html || '',
            text: body.text || '',
        });

        return { data };
    } catch (error) {
        return error;
    }
});