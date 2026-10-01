import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/stories/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  shims: true,
  loader: {
    ".svg": "dataurl", // Converts small SVGs into ultra-fast inline browser data strings
  },
  outDir: "dist",
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
