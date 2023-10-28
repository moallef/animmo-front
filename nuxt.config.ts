// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper','vue3-carousel-nuxt'],
  carousel:{prefix: 'MyPrefix'},
})
