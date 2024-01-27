export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',

  site: {
    url: 'https://cojovi.com',
  },

  modules: [
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    '@nuxt/devtools'
  ]
})
