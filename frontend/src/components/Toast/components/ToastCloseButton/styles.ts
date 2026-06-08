import styled from 'styled-components'

import { flexStyle } from '@themes/mixins'
import Icon from '../../../Icon'

export const Root = styled(Icon)`
  ${flexStyle({ align: 'start' })};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 14px;
  cursor: pointer;
`
