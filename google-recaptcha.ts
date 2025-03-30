

import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LdwcAQrAAAAAPoMm4Oeqsi1Y9jgYr0cx7BOd5UY',
        loaderOptions: {
            autoHideBadge: false,
            explicitRenderParameters: {
                badge: 'bottomleft',
            },
        },
    });
});