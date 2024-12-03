import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesis } from '@formkit/themes'
import { de } from '@formkit/i18n'

export default defaultConfig({
  locales: { de },
  locale: 'de',
  css: ['~/assets/formkit-theme.css'],
  config: {
    rootClasses: false,
    classes: generateClasses({
      ...genesis,
      // Hier kannst du zusätzliche Theme-Anpassungen vornehmen
      global: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1',
        input: 'w-full h-10 px-3 rounded-lg text-gray-700'
      }
    })
  }
})
