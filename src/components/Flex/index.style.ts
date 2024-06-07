import { css } from '@emotion/css';

import { marginSpacingStyle, paddingSpacingStyle } from '@/utils/emotion';

import type { FlexProps } from './index.type';

export const flexDefaultStyle = (props: FlexProps<any>) => css`
  display: ${props.display ?? 'flex'};
  flex-direction: ${props.direction};
  align-items: ${props.align};
  justify-content: ${props.justify};
  gap: ${props.space};
  flex: ${props.flex};
  width: ${props.width};
  height: ${props.height};
  overflow: ${props.overflow};

  ${marginSpacingStyle(props)};
  ${paddingSpacingStyle(props)};
`;
