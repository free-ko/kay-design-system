import type { CSSProperties, ElementType } from "react";
import type { SpacingLayout } from "@/types/emotion";
import type { OverridableProps } from "@/utils/type";

type FlexBaseProps = {
  display?: "inline-flex" | "flex";
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  space?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  overflow?: CSSProperties["overflow"];
};

export type FlexProps<T extends ElementType = "div" | "nav" | "form"> =
  OverridableProps<T, FlexBaseProps> & SpacingLayout;
