import { definePreview } from "@storybook/react-vite";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "storybook/theming";

import "../src/stories/styles/index.css";

export default definePreview({
  addons: [addonA11y(), addonDocs()],
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light", // Or your default theme
      // toolbar: {
      //   icon: "circlehollow", // Or another icon
      //   items: ["light", "dark"], // Your theme options
      //   dynamicTitle: true,
      // },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    a11y: {
      options: { xpath: true },
    },
    // see: https://storybook.js.org/addons/@vueless/storybook-dark-mode
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#1b1c1d" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "#f4f4f5" },
      darkClass: "dark",
      lightClass: "light",

      // stylePreview: true,
    },
  },
});
