import { defineSetupVue3 } from "@histoire/plugin-vue";
import ui from "@nuxt/ui/vue-plugin";
import "./app/assets/css/main.css";

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(ui);
});
