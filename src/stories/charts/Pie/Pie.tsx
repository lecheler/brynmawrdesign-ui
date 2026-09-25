import React from "react";
import { motion } from "motion/react";

import "./Pie.css";

import { Heading } from "../../foundations/typography/Heading";
import { Stack } from "../../foundations/layout/Stack";

export interface PieData {
  value: number;
  category: string;
  color: string;
}
interface PieProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: PieData[];
  title?: string;
  size?: number;
}

/** Primary UI component for user interaction */
export const Pie = ({
  title = "Pie Chart",
  size = 150,
  ...props
}: PieProps) => {
  const strokeWidth = size / 4; // Size of hole for donut
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // 1. Find the denominator using reduce
  const denominator = props.data.reduce((sum, item) => sum + item.value, 0);
  // 2. Fallback to prevent Division by Zero if data array is empty
  const safeDenominator = denominator === 0 ? 1 : denominator;

  // Track the running total of percentages to rotate subsequent slices
  let accumulatedPercentage = 0;

  return (
    <div className="bmd-pie" data-size={size}>
      <Stack gap={4}>
        <Heading>{title}</Heading>
        <motion.svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }} // Rotates start point to 12 o'clock
        >
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
          />

          {props.data.map((slice, index) => {
            // 3. Convert raw value to a percentage out of 100
            const slicePercentage = (slice.value / safeDenominator) * 100;

            // 4. Calculate stroke offsets and rotation
            const strokeDashoffset =
              circumference - (slicePercentage / 100) * circumference;
            const rotationAngle = accumulatedPercentage * 3.6;

            // 5. Accumulate the percentage for the NEXT slice
            accumulatedPercentage += slicePercentage;
            return (
              <motion.circle
                fill="transparent"
                transform-origin="center"
                key={index}
                cx={center}
                cy={center}
                r={radius}
                stroke={slice.color}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                rotate={rotationAngle}
                initial={{
                  opacity: 0,
                  rotate: rotationAngle,
                  strokeWidth: strokeWidth,
                  strokeDashoffset: circumference, // Start with the slice hidden
                }}
                animate={{
                  opacity: 1.0,
                  rotate: rotationAngle,
                  strokeWidth: strokeWidth,
                  strokeDashoffset: strokeDashoffset,
                  transition: {
                    delay: 0.25 * index,
                    ease: "circIn",

                    type: "spring",
                    stiffness: 120,
                  },
                }}
                // exit={{
                //   opacity: 0.25,
                //   strokeWidth: 0,
                //   transition: {
                //     delay: 0,
                //   },
                // }}
              />
            );
          })}
        </motion.svg>
      </Stack>
    </div>
  );
};
