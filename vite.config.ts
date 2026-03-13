import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function normalizeBasePath(value?: string): string {
  if (!value || value === "/") {
    return "/";
  }

  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
}

export default defineConfig({
  plugins: [react()],
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  server: {
    port: 5173,
  },
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
});
