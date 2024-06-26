import _get from "lodash/get";

import COLORS from "@/constants/themeAssets/colors";

import type {
  CreateTypographyParams,
  CreateTypographyTokenParams,
  IColorType,
  MarginSpacing,
  PaddingSpacing,
  ScreenSize,
  Typography,
  TypographyWeight,
} from "@/types/emotion";

const MULTIPLE = 4;

/**
 * 공통 사이즈를 가져오는 함수입니다. (단위: px)
 */

export const getSize = (size: number) => {
  return `${size * MULTIPLE}px`;
};

/**
 * 마진 값을 스타일링하는 함수입니다.
 */
export const marginSpacingStyle = (props: MarginSpacing): string => {
  const { mx, my } = props;
  const { mt = my, mb = my, ml = mx, mr = mx } = props;
  const margins = Object.entries({ top: mt, bottom: mb, left: ml, right: mr });

  return margins
    .reduce<string[]>((arr, [position, value]) => {
      if (typeof value === "number") {
        arr.push(`margin-${position}: ${getSize(value)}`);
      }

      return arr;
    }, [])
    .join(";");
};

/**
 * 패딩 값을 스타일링하는 함수입니다.
 */
export const paddingSpacingStyle = (props: PaddingSpacing): string => {
  const { px, py } = props;
  const { pt = py, pb = py, pl = px, pr = px } = props;
  const paddings = Object.entries({ top: pt, bottom: pb, left: pl, right: pr });

  return paddings
    .filter(([_position, value]) => typeof value === "number")
    .map(([position, value]) => `padding-${position}: ${getSize(value ?? 0)}`)
    .join(";");
};

/**
 * 컬러 값을 가져오는 함수입니다.
 */
export const getColor = (colorType: IColorType) => {
  return _get(COLORS, colorType);
};

/**
 * 입력받은 파라미터를 사용하여 타이포그래피 속성 객체를 만드는 함수입니다.
 */
export const createTypographyToken = (params: CreateTypographyTokenParams) => {
  return {
    fontSize: `${params.fontSize}px`,
    fontWeight: params.fontWeight,
    lineHeight: `${params.lineHeight}px`,
  };
};

/**
 * 타이포그래피의 각 속성들을 만들고, 이를 TypographyWeight와 Typography의 Record 객체로 반환하는 함수입니다.
 */
export const createTypography = ({
  fontSize,
  lineHeight,
}: CreateTypographyParams): Record<TypographyWeight, Typography> => {
  return {
    light: createTypographyToken({
      fontSize,
      fontWeight: "light",
      lineHeight,
    }),
    regular: createTypographyToken({
      fontSize,
      fontWeight: "normal",
      lineHeight,
    }),
    bold: createTypographyToken({
      fontSize,
      fontWeight: "bold",
      lineHeight,
    }),
    semiBold: createTypographyToken({
      fontSize,
      fontWeight: 600,
      lineHeight,
    }),
  };
};

/**
 * 미디어 쿼리 문자열을 만드는 함수입니다.
 */
export const buildMediaQuery = (
  screenSize: ScreenSize,
  not?: boolean,
): string => {
  const { minWidth, maxWidth } = screenSize;
  let query = "@media ";

  if (minWidth) {
    query += `(min-width: ${minWidth}px)`;
  }

  if (minWidth && maxWidth) {
    query += " and ";
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth}px)`;
  }

  if (not) {
    query = `not all and ${query}`;
  }

  return query;
};
