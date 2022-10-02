// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@storyblok/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
  ],
  runtimeConfig: {
    public: {
      STORY_VERSION: process.env.STORY_VERSION || "draft",
    },
  },
  storyblok: {
    accessToken: process.env.STORY_BLOK,
    bridge: true,
    apiOptions: {
      region: "us",
    },
    useApiClient: true,
  },
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
});
