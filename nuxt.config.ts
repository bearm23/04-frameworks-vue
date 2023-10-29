export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"]
      }
    ]
  ],
  css: ["~/assets/scss/main.scss"],
});
