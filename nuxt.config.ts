// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {path: './components/forms', prefix: 'Forms'},
    {path: './components/uteis', prefix: 'Uteis'},
    {path: './components/map', prefix: 'Map'},
    {path: './components/dados', prefix: 'Dados'},
    '~/components'
  ],

  compatibilityDate: '2024-10-20',
})