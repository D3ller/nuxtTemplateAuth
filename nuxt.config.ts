// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo"
  ],

  runtimeConfig: {
    cookieName: "session",
    cookieSecret: process.env.COOKIE_SECRET
  },
})