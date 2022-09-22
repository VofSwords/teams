import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt'],
  build: {
    transpile: ['element-plus'],
  },
  css: ['element-plus/theme-chalk/dark/css-vars.css'],
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})
