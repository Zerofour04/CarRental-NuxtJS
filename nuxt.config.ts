// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module', '@pinia/nuxt'],
  plugins: ['~/plugins/vuetify.js'],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  i18n: {
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
    detectBrowserLanguage: false  // Dies deaktiviert die automatische Erkennung der Browser-Sprache
  },
  build: {
    transpile: ['vuetify']
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#547a9e'  // Beispiel für deine bevorzugte Farbe
        }
      }
    }
  }
})