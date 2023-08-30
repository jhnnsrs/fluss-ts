import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],

  server: {
    port: 6789,
    strictPort: true,
  },
  build: {
    lib: {
      entry: "src/rekuest/index.tsx",
      name: "rekuest",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@apollo/client",
        "subscriptions-transport-ws ",
        "yup",
        "handlebars",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
