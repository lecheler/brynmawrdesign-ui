import { definePreview } from "@storybook/react-vite";
import addonA11y from "@storybook/addon-a11y";

import "../src/stories/styles/index.css";

export default definePreview({
  // 👇 Add your addons here
  addons: [addonA11y()],
  parameters: {
    // type-safe!
    a11y: {
      options: { xpath: true },
    },
  },
});

// export const parameters = {
//   darkMode: {
//     // Override the default dark theme
//     dark: { ...themes.dark, appBg: "black" },
//     // Override the default light theme
//     light: { ...themes.normal, appBg: "red" },
//   },
// };

// export const globalTypes = {
//   theme: {
//     name: "Theme",
//     description: "Global theme for components",
//     defaultValue: "light",
//     toolbar: {
//       icon: "circlehollow",
//       items: [
//         { value: "light", title: "Light" },
//         { value: "dark", title: "Dark" },
//       ],
//       showName: true,
//       dynamicTitle: true,
//     },
//   },
// };

// export const decorators: Preview["decorators"] = [
//   (Story, context) => {
//     const theme = context.globals.theme || "light";

//     // Apply data-theme to the <html> element
//     if (typeof document !== "undefined") {
//       document.documentElement.setAttribute("data-theme", theme);
//     }

//     // Also adjust Storybook "backgrounds" parameter for nicer preview
//     context.parameters = {
//       ...context.parameters,
//       backgrounds: {
//         ...(context.parameters.backgrounds || {}),
//         default: theme,
//       },
//     };

//     return <Story />;
//   },
// ];

// const preview: Preview = {
//   parameters: {
//     stylePreview: true,
//     darkMode: {
//       current: "light",
//     },
//     // controls: {
//     //   matchers: {
//     //     color: /(background|color)$/i,
//     //     date: /Date$/i,
//     //   },
//     // },

//     backgrounds: {
//       default: "light",
//       values: [
//         { name: "light", value: "#fafafa" },
//         { name: "dark", value: "#18181b" },
//       ],
//     },

//     a11y: {
//       // 'todo' - show a11y violations in the test UI only
//       // 'error' - fail CI on a11y violations
//       // 'off' - skip a11y checks entirely
//       test: "todo",
//     },
//   },
// };

// export default preview;
