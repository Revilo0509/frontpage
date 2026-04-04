import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";

import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  ssr: true,
  blueprint: md3,
  theme: {
    defaultTheme: "system",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
});
