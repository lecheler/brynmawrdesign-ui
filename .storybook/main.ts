import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  framework: "@storybook/react-vite",
  stories: [
    "../src/docs/**/*.mdx", // Catches global foundations & introductions
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)", // Catches co-located component canvas files
  ],
  addons: [
    "@chromatic-com/storybook",
    // "@vueless/storybook-dark-mode",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  // typescript: {
  //   reactDocgen: false,
  // },
});
