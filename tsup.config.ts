import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/stories/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "preserve";
  },
});
