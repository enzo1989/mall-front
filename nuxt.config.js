export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mall-pc-01',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/element-ui.js', mode:'client'},
    //{src:'~/plugins/axios.js', mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://localhost:7300/mock/607768b02fe289b320b5422e/mallmock',
    //baseURL: 'http://localhost:9000/v1',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor : ['element-ui'], // 防止element-ui
  }
}
