// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [],

  app: {
    head: {
      title: 'Nuxt-4',
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Nuxt 4 Experiments'
        },
        {
          name: 'keywords',
          content: 'NUXT, SCSS'
        }
      ],
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      //   },
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
      //   }
      // ],

    }
  }
})