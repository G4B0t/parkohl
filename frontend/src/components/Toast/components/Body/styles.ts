import styled, { css } from 'styled-components'

import { flexStyle, textStyle } from '@themes/mixins'
import Icon from '../../../Icon'

export const Root = styled.div`
  padding-right: 24px;
`
export const Title = styled.h3`
  ${textStyle({ size: '14px', textAlign: 'left', weight: 600 })};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  margin-top: 3px;
`
export const BodyWrapper = styled.div<{ collapsed: boolean }>`
  position: relative;
  ${({ collapsed }) =>
    collapsed &&
    css`
      max-height: 100px;
      overflow: hidden;
    `}
`
export const BodyItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
  color: ${({ theme }) => theme.colors.white};
`
export const More = styled.div`
  ${flexStyle({
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    wrap: 'nowrap',
  })};
  cursor: pointer;
  margin-top: 8px;
`
export const Label = styled.div`
  ${textStyle({ size: '12px', textAlign: 'left', weight: 500 })};
  color: ${({ theme }) => theme.colors.white};
  padding-right: 6px;
`
export const ArrowDown = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`
