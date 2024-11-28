// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module', '@pinia/nuxt'],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  i18n: {
    defaultLocale: 'en',

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.json'
      }
    ],
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: false
  },
  build: {
    transpile: ['vuetify']
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#547a9e'
        }
      }
    }
  }
})