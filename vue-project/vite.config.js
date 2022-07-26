import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import veauryVitePlugins from "veaury/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // vueJsx(),
    veauryVitePlugins({
      type: "vue",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
    },
  },
});
