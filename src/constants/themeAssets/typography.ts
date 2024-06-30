import { createTypography } from "@/utils/emotion";

import type {
  Typography,
  TypographySize,
  TypographyWeight,
} from "@/types/emotion";

const TYPOGRAPHY: Record<
  TypographySize,
  Record<TypographyWeight, Typography>
> = {
  sm: createTypography({
    fontSize: 12,
    lineHeight: 14,
  }),
  md: createTypography({
    fontSize: 15,
    lineHeight: 18,
  }),
  lg: createTypography({
    fontSize: 16,
    lineHeight: 19,
  }),
  xl: createTypography({
    fontSize: 18,
    lineHeight: 21,
  }),
  xxl: createTypography({
    fontSize: 21,
    lineHeight: 25,
  }),
};

export default TYPOGRAPHY;
