import React, { useMemo, useState } from "react";

import preview from "../../../../.storybook/preview";
import { mockShowsData, mockBandsData } from "../../data/shows.mock";
import { prepareShowsForStackedChart } from "../../data/analyticsTransformers";

import { BarChart } from "./BarChart";
import {
  CheckboxGroup,
  CheckboxOption,
} from "../../components/CheckboxGroup/CheckboxGroup";

const meta = preview.meta({
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
});

// Interactive template that updates the isOpen state within Storybook
const InteractiveTemplate: React.FC<any> = (args) => {
  const rawShows = { ...args }.data;
  const bands: CheckboxOption[] = mockBandsData.data.map((band) => {
    return {
      label: band.name,
      value: band.slug,
    };
  });
  const [selectedBands, setSelectedBands] = useState([
    "nato-coles",
    "right-here",
  ]);
  const filteredShows = useMemo(() => {
    return rawShows.filter((show) => {
      const matchesBand = selectedBands.some(
        (bandSlugOrName) =>
          show.category.toLowerCase() === bandSlugOrName.toLowerCase(),
      );

      return matchesBand;
    });
  }, [rawShows, selectedBands]); // Only reruns if raw data or active filters actually change!

  return (
    <div>
      <CheckboxGroup
        name="bands"
        options={bands} // Stable via useMemo
        value={selectedBands} // Stable via useMemo
        onChange={(nextValues) => {
          setSelectedBands(nextValues);
        }}
      />
      <BarChart {...args} data={filteredShows} />
    </div>
  );
};

export const Interactive = meta.story({
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    data: prepareShowsForStackedChart(mockShowsData.data, mockShowsData.data),
    height: 250,
    maxValue: 67,
  },
});

export const Default = meta.story({
  args: {
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
