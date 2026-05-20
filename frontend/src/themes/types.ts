import { ThemeModes } from './enums'

export type ThemeSpacing = {
  unit: number
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  borderRadius: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    round: string
  }
}

export type ThemeVariant = {
  colors: Record<string, string>
  images: Record<string, string>
  spacing: ThemeSpacing
  typography: Record<string, unknown>
}

export type Theme = {
  [key in ThemeModes]: ThemeVariant
}

export type ThemeColors = Theme[ThemeModes]['colors'][keyof Theme[ThemeModes]['colors']]
