import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: false,
    nitro: {
      prerender: {
        crawlLinks: true
      }
    },
    components: true,
    app: {
      head:{
        link: [
          { rel: "stylesheet", type: "text/css", href: "../primevue/resources/themes/saga-blue/theme.css" },
          { rel: "stylesheet", type: "text/css", href: "../primevue/resources/primevue.css" },
          { rel: "stylesheet", type: "text/css", href: "../primeicons/primeicons.css" },
          { rel: "stylesheet", type: "text/css", href: "../primeflex/primeflex.css" },
          { rel: "stylesheet", type: "text/css", href: "../assets/default.css" },
          { rel: "stylesheet", type: "text/css", href: "../assets/icons/remixicon.cs" }
        ],
      },
      buildAssetsDir: '/src/'
    },
    css: [
        'primevue/resources/themes/aura-light-green/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    modules: [
        [
          '@pinia/nuxt',
          {
            autoImports: [
              'defineStore',
              ['defineStore', 'definePiniaStore'],
            ],
          },
        ],
      ],
    	build: {
        transpile: ['primevue'],
      },
      typescript: {
        strict: true,
      },
      
})