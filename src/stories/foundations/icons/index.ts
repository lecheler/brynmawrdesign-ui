import React from "react";

// see: https://www.npmjs.com/package/vite-plugin-svgr
const CheckIcon = React.lazy(() => import("./svgs/check.svg?react"));
const DownloadIcon = React.lazy(() => import("./svgs/download.svg?react"));
const ExclamationIcon = React.lazy(
  () => import("./svgs/exclamation.svg?react"),
);
const SearchIcon = React.lazy(
  () => import("./svgs/magnifying-glass.svg?react"),
);
const StarIcon = React.lazy(() => import("./svgs/star.svg?react"));
const XIcon = React.lazy(() => import("./svgs/x.svg?react"));

export {
  CheckIcon,
  DownloadIcon,
  ExclamationIcon,
  SearchIcon,
  StarIcon,
  XIcon,
};
