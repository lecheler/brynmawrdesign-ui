import React from "react";
import { AnimatePresence, motion } from "motion/react";

import "./BarChart.css";

export interface BarChartItem {
  id: string | number; // Absolute unique key for React's reconciliation loop loop
  groupId: string; // 🔑 Programmatic key used to group items into the same vertical stack
  category: string; // Programmatic key separating segments within a single stack (e.g., band slug)
  label: string; // 💬 Pure text string painted on the X-axis (can be anything, duplicates allowed)
  value: number; // Numeric metrics height
  color: string; // CSS Variable token string
}

export interface BarChartProps {
  data: BarChartItem[];
  title?: string;
  height?: number;
  maxValue?: number;
}

/** Primary UI component for user interaction */
export const BarChart = ({
  title = "Bar Chart",
  height = 500,
  ...props
}: BarChartProps) => {
  const columnsMap = props.data.reduce(
    (acc, item) => {
      if (!acc[item.groupId]) {
        acc[item.groupId] = {
          groupId: item.groupId,
          axisLabel: item.label, // 👈 Capture the display label safely from the first item
          segments: [],
          totalValue: 0, // Keep running total of values per column
        };
      }
      acc[item.groupId].segments.push(item);
      acc[item.groupId].totalValue += item.value;
      return acc;
    },
    {} as Record<
      string,
      {
        groupId: string;
        axisLabel: string;
        segments: BarChartItem[];
        totalValue: number;
      }
    >,
  );

  const columnsList = Object.values(columnsMap);

  let maxValue =
    props.maxValue ||
    columnsList.reduce(
      (max, current) => Math.max(max, current.totalValue),
      -Infinity,
    );

  const ANIMATE_TIME = 0.25;
  const ANIMATE_DELAY = ANIMATE_TIME / 5;
  return (
    <div className="bmd-bar-chart">
      <AnimatePresence>
        {columnsList.map((bar, index) => {
          return (
            <motion.div
              key={`bar-${bar.groupId}-${index}`}
              className="bmd-bar-chart__value-wrapper"
            >
              <motion.div
                key={`val-${bar.groupId}`}
                className="bmd-bar-chart__value-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: ANIMATE_TIME + ANIMATE_DELAY * index,
                    type: "spring",
                    visualDuration: ANIMATE_TIME,
                    bounce: 0.4,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                {bar.totalValue}
              </motion.div>
              <motion.div
                className="bmd-bar-chart__value-bar-wrapper"
                style={{ height: (bar.totalValue / maxValue) * height }}
              >
                <motion.div
                  className="bmd-bar-chart__value-bar-total"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "100%",
                    opacity: 1.0,
                    transition: {
                      height: {
                        delay: ANIMATE_DELAY * index,
                        type: "spring",
                        visualDuration: ANIMATE_TIME,
                        bounce: 0.4,
                      },
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {bar.segments.map((segment) => {
                    return (
                      <motion.div
                        key={`label-${segment.id}`}
                        style={{
                          backgroundColor:
                            segment.color || "var(--color-data-1)",
                          height: `${(segment.value / bar.totalValue) * 100}%`,
                        }}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>

              <motion.div className="bmd-bar-chart__value-sep" />
              <motion.div
                className="bmd-bar-chart__value-label"
                key={`label-${bar.groupId}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: ANIMATE_TIME + ANIMATE_DELAY * index,
                    type: "spring",
                    visualDuration: ANIMATE_TIME,
                    bounce: 0.4,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                {bar.axisLabel}
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
