import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Professional-Tech-Portfolio/",
  build: {
    outDir: "docs",
  },
});