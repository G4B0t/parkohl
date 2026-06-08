import styled, { css } from 'styled-components';

import { isDef } from '@utils/def';

import { Props } from './types';

export const Root = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: nowrap;
`;

export const SvgWrapper = styled.div<Partial<Props>>`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  ${({ rotate, size }) => css`
    width: ${isDef(size) ? `${size}px` : '100%'};
    height: ${isDef(size) ? `${size}px` : '100%'};
    transform: ${isDef(rotate) ? `rotate(${rotate}deg)` : 'none'};
  `}
  flex-shrink: 0;

  svg {
    width: 100%;
  }
`;
