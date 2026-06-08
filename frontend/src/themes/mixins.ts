import { css } from 'styled-components'

import { ThemeColors } from './types'

type TextStyle = {
  color?: ThemeColors
  lineHeight?: number
  size?: string
  textAlign?: string
  weight?: number
}

type FlexStyle = {
  align?: string
  direction?: string
  justify?: string
  wrap?: string
}

type GridStyle = {
  columnGap?: number
  columns?: number
  rowGap?: number
  rows?: number
}

export const textStyle = ({
  color = 'textPrimary',
  lineHeight,
  size = '14px',
  textAlign = 'left',
  weight = 400,
}: TextStyle) => css`
  color: ${({ theme }) => theme.colors[color]};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  text-align: ${textAlign};
`

export const flexStyle = ({
  align = 'stretch',
  direction = 'row',
  justify = 'flex-start',
  wrap = 'wrap',
}: FlexStyle) => css`
  align-items: ${align};
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
`

export const gridStyle = ({
  columnGap = 0,
  columns = 1,
  rowGap = 0,
  rows = 1,
}: GridStyle) => css`
  column-gap: ${columnGap}px;
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  row-gap: ${rowGap}px;
`

export const rgba = (hexColor: string, percentage: number) => {
  const opacity = Math.max(0, Math.min(100, percentage)) / 100
  return `${hexColor}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')}`
}
