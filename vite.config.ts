import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
const { resolve } = require("path");
// https://vitejs.dev/config/

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        webpart1: resolve(__dirname, "webpart1.html"),
        webpart2: resolve(__dirname, "webpart2.html"),
      },
    },
  },
};
export default defineConfig({
  plugins: [reactRefresh()],
});
