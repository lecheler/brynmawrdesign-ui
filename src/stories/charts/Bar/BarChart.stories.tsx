import preview from "../../../../.storybook/preview";

import { BarChart } from "./BarChart";

const meta = preview.meta({
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
  },
});

export const Default = meta.story({
  args: {
    title: "Default Bar Chart",
    maxValue: 120,
    data: [
      {
        id: 1,
        groupId: "2010",
        category: "nato",
        label: "'10",
        value: 15,
        color: "var(--color-data-1)",
      },
      {
        id: 2,
        groupId: "2010",
        category: "the-right-here",
        label: "'10",
        value: 10,
        color: "var(--color-data-2)",
      },

      {
        id: 4,
        groupId: "2011",
        category: "the-right-here",
        label: "'11",
        value: 50,
        color: "var(--color-data-2)",
      },
      {
        id: 5,
        groupId: "2012",
        category: "the-right-here",
        label: "'12",
        value: 50,
        color: "var(--color-data-2)",
      },
      {
        id: 6,
        groupId: "2012",
        category: "nato",
        label: "'12",
        value: 50,
        color: "var(--color-data-1)",
      },
    ],
  },
});

export default meta;
