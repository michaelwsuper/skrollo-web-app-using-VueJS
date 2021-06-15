module.exports = {
  mode: "spa",
  performance: {
    gzip: false
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Skrollo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/png", id: 'favicon-tag', href: "/icon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      }
      // { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/a9348fbdc8.js"}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/disqus",
    "~/plugins/clickoutside",
    "~/plugins/masonry",
    "~/plugins/vuevisual",
    "~/plugins/moment",
    '~/plugins/validate',
    '~/plugins/auth',
    { src: "~/plugins/google", mode: "client" },
    { src: "~/plugins/lazyyoutube", mode: "client" },
    { src: "~/plugins/infinite-scroll", mode: "client" },
    { src: "~/plugins/scrollvue", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // '@nuxtjs/auth',
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    ["@nuxtjs/google-tag-manager", { id: "GTM-PZXPNQQ" }],
    ['nuxt-segment-analytics', { id: "pxMoUTeFVkBpwmcbxaehUJVMb8weALFD", useRouter: true }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URI || "https://test.skrollo.com",
    // baseURL: process.env.API_BASE || 'http://localhost:8000',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  serverMiddleware: [
    '~/server/body',
    '~/server/session',
    '~/server/csrf',
    '~/server/auth',
    '~/server/api'
  ],
};
