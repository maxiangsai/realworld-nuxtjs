export default {
  head: {
    title: 'realworld-nuxtjs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css',
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  plugins: ['~/plugins/axios.js'],
  router: {
    linkActiveClass: 'active',
  },
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://conduit.productionready.io/api',
    },
  },
  modules: ['@nuxtjs/axios'],

  build: {},
}
