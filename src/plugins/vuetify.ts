// plugins/vuetify.js
import 'vuetify/styles' // ← this line pulls in all of Vuetify’s CSS
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Specify the icon set
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})
