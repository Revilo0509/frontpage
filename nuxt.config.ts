// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-07-24",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/test-utils/module"],
  css: ["~/assets/css/main.css"],
});
