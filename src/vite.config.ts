// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@kentico/kontent-core": "@kentico/kontent-core/dist/cjs",
      "@kentico/kontent-delivery": "@kentico/kontent-delivery/dist/cjs"
    }
  }
})