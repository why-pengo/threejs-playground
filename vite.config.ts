// vite.config.ts
import path from "path";

export default {
  // config options
  base: "/threejs-playground/",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
};
