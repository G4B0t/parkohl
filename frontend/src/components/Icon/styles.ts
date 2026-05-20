import styled from 'styled-components'

import { IconFrameProps } from './types'

export const IconFrame = styled.span<IconFrameProps>`
  align-items: center;
  color: currentColor;
  display: inline-flex;
  flex: 0 0 auto;
  height: ${({ $size }) => $size}px;
  justify-content: center;
  width: ${({ $size }) => $size}px;

  svg {
    display: block;
  }
`
