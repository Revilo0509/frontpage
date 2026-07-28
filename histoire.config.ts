import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";

export default defineConfig({
  plugins: [HstVue()],
  setupFile: "/histoire.setup.ts",
  storyMatch: ["app/**/*.story.vue"],
  storyIgnored: [
    "**/node_modules/**",
    "**/.direnv/**",
    "**/.git/**",
    "**/.nuxt/**",
    "**/.output/**",
    "**/dist/**",
  ],
  vite: {
    plugins: [vue(), ui()],
    ssr: {
      noExternal: ["@nuxt/ui"],
    },
  },
});
