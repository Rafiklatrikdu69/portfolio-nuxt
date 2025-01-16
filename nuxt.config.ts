// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/main.css'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt'    
  ],
  googleFonts: {
    families: {
      Ubuntu: true,
      Inter: [200, 700],
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  supabase: {
    redirect: false,
  },
  vite: {
    define: {
      'process.env.APP_URL': JSON.stringify(process.env.SUPABASE_URL),
      'process.env.APP_KEY': JSON.stringify(process.env.SUPABASE_KEY),
      'process.env.GIT_TOKEN': JSON.stringify(process.env.GIT_TOKEN)
    }
  },
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    include: undefined,
    exclude: ['sign-up'],
    cookieRedirect: false,
  }
})