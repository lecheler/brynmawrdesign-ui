import { defineConfig } from "tsup";
import fs from "fs";

export default defineConfig({
  entry: ["./src/stories/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  shims: true,
  // loader: {
  //   ".svg": "dataurl",
  // },
  outDir: "dist",
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  esbuildPlugins: [
    {
      name: "svg-base64-loader",
      setup(build) {
        /* 🌟 THE CRITICAL FIX: Change /\.svg\$/ to /\.svg\$/
         (Remove the backslash so it acts as an end-of-string boundary anchor) */
        build.onLoad({ filter: /\.svg\$/ }, (args) => {
          const svgText = fs.readFileSync(args.path, "utf8");
          // Convert the file content to binary Base64 strings
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
