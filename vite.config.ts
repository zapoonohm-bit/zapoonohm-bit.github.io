import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from "vite-plugin-source-info"

const isProd = process.env.BUILD_MODE === "prod"

export default defineConfig({
  // 🔴 สำคัญที่สุดสำหรับ GitHub Pages
  base: "/numera/",

  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: "data-matrix",
      includeProps: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
