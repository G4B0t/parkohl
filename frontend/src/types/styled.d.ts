import 'styled-components'
import { ThemeVariant } from '@themes/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeVariant['colors']
    images: ThemeVariant['images']
    spacing: ThemeVariant['spacing']
    typography: ThemeVariant['typography']
  }
}
