import React from "react";

// see: https://www.npmjs.com/package/vite-plugin-svgr
const CheckIcon = React.lazy(() => import("./svgs/check.svg?react"));
const Download = React.lazy(() => import("./svgs/download.svg?react"));
const XIcon = React.lazy(() => import("./svgs/x.svg?react"));
const ExclamationIcon = React.lazy(
  () => import("./svgs/exclamation.svg?react"),
);
const StarIcon = React.lazy(() => import("./svgs/star.svg?react"));

export { CheckIcon, Download, ExclamationIcon, StarIcon, XIcon };
