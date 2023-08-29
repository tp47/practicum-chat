import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "./vite-plugin-handlebars-precompile";

export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [handlebars()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
