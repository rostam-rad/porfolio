import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    root: "/src",
    alias: {
      components: "/src/components",
      actions: "/src/actions",
      assets: "/src/assets",
      constants: "/src/constants",
      containers: "/src/containers",
      contexts: "/src/contexts",
      selectors: "/src/selectors",
      reducers: "/src/reducers",
      store: "/src/store",
      styles: "/src/styles",
      translation: "/src/translation",
    },
  },
});
