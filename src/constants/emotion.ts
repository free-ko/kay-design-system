export const MARGIN_SPACING_OPTIONS = [
  "mt",
  "mb",
  "ml",
  "mr",
  "my",
  "mx",
] as const;

export const PADDING_SPACING_OPTIONS = [
  "pt",
  "pb",
  "pl",
  "pr",
  "py",
  "px",
] as const;

export const SIZES = {
  sm: { maxWidth: 540 },
  md: { maxWidth: 1000 },
  lg: { minWidth: 1001 },
  max540: { maxWidth: 540 },
  min541: { minWidth: 541 },
  max1024: { maxWidth: 1024 },
  max1440: { maxWidth: 1440 },
  max1640: { maxWidth: 1640 },
  max1920: { maxWidth: 1920 },
} as const;
