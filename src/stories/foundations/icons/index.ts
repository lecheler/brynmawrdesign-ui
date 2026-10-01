import React from "react";

// see: https://www.npmjs.com/package/vite-plugin-svgr
const ArrowUp = React.lazy(() => import("./svgs/arrow-up.svg?react"));
const ArrowDown = React.lazy(() => import("./svgs/arrow-down.svg?react"));

const ChevronRight = React.lazy(() => import("./svgs/chevron-right.svg?react"));
const ChevronLeft = React.lazy(() => import("./svgs/chevron-left.svg?react"));
const ChevronsRight = React.lazy(
  () => import("./svgs/chevrons-right.svg?react"),
);
const ChevronsLeft = React.lazy(() => import("./svgs/chevrons-left.svg?react"));

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
  ArrowUp,
  ArrowDown,
  CheckIcon,
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
  DownloadIcon,
  ExclamationIcon,
  SearchIcon,
  StarIcon,
  XIcon,
};
