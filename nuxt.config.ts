export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: 'My Portfolio.' },
        { name: 'keywords', content: '' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-adsense-account', content: 'ca-pub-7357393740215228' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
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
    '@pinia/nuxt',
    'nuxt-highcharts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
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
      'process.env.GIT_TOKEN': JSON.stringify(process.env.GIT_TOKEN),
      'process.env.KEY_RECAP_PUBLIC': JSON.stringify(process.env.KEY_RECAP_PUBLIC),
      'process.env.KEY_RECAP_PRIVATE': JSON.stringify(process.env.KEY_RECAP_PRIVATE)

    }
  },
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    include: undefined,
    exclude: ['sign-up'],
    cookieRedirect: false,
  },
  sitemap: {
    hostname: 'https://rafik-bouchenna.fr',
    gzip: true,
    exclude: [
      '/login',
      '/confirm',
      '/sign-up'
    ],
    routes: [
      {
        url: '/projets',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2023-10-01T13:30:00.000Z'
      }
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: '/private/',
    Sitemap: 'https://rafik-bouchenna.fr/sitemap.xml'
  }
})