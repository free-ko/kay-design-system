import { buildMediaQuery } from "@/utils/emotion";

import { SIZES } from "../emotion";

const BREAK_POINTS = {
  sm: buildMediaQuery(SIZES.sm),
  md: buildMediaQuery(SIZES.md),
  lg: buildMediaQuery(SIZES.lg),
  max540: buildMediaQuery(SIZES.max540),
  min541: buildMediaQuery(SIZES.min541),
  max1024: buildMediaQuery(SIZES.max1024),
  max1440: buildMediaQuery(SIZES.max1440),
  max1640: buildMediaQuery(SIZES.max1640),
  max1920: buildMediaQuery(SIZES.max1920),
} as const;

export default BREAK_POINTS;
