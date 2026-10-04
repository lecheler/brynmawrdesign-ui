import { defineConfig } from "tsup";
import fs from "fs";

export default defineConfig({
  entry: ["./src/stories/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  shims: true,
  loader: {
    ".svg": "dataurl",
  },
  outDir: "dist",
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  esbuildPlugins: [
    {
      name: "svg-base64-loader",
      setup(build) {
        // 🌟 THE FIX: Remove the backslash before the dollar sign so it targets true file extensions
        build.onLoad({ filter: /\.svg\$/ }, (args) => {
          const svgText = fs.readFileSync(args.path, "utf8");
          const base64 = Buffer.from(svgText).toString("base64");
          const dataUrl = `data:image/svg+xml;base64,${base64}`;

          return {
            contents: `export default ${JSON.stringify(dataUrl)};`,
            loader: "js",
          };
        });
      },
    },
  ],
});
