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
    // maxValue: 120,
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
      {
        id: 7,
        groupId: "2013",
        category: "nato",
        label: "'13",
        value: 10,
        color: "var(--color-data-1)",
      },
      {
        id: 8,
        groupId: "2014",
        category: "nato",
        label: "'14",
        value: 20,
        color: "var(--color-data-1)",
      },
      {
        id: 9,
        groupId: "2015",
        category: "nato",
        label: "'15",
        value: 50,
        color: "var(--color-data-1)",
      },
      {
        id: 10,
        groupId: "2016",
        category: "nato",
        label: "'16",
        value: 30,
        color: "var(--color-data-1)",
      },
      {
        id: 11,
        groupId: "2017",
        category: "nato",
        label: "'17",
        value: 12,
        color: "var(--color-data-1)",
      },
    ],
  },
});

export default meta;
