import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const backendUrl =
    env.VITE_BACKEND_URL || "https://ecommerce-reactjs-ali4.onrender.com";

  return {
    plugins: [react()],
    base: process.env.VERCEL ? "/" : "/Ecommerce-Reactjs/",
    server: {
      proxy: {
        "/api": {
          target: backendUrl,
          changeOrigin: true,
        },
        "/images": {
          target: backendUrl,
          changeOrigin: true,
        },
      },
    },
  };
});
