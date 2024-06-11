import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";// Import the react plugin, swc is the default compiler
export default defineConfig({
 plugins: [react()],
 build: {
  manifest: true, // Generates manifest.json file during build
  rollupOptions: {
   input: "./src/main.jsx", // Entry file for the application
  },
 },
});