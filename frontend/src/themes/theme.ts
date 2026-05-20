import { ThemeModes } from './enums'
import { Theme } from './types'

export const commonColors: Record<string, string> = {
  white: '#ffffff',
  black: '#101828',
  blue: '#2563eb',
  green: '#0f8a65',
  red: '#dc2626',
  turquoiseIcon: '#14b8a6',
  violetIcon: '#7c3aed',
  yellow: '#b7791f',
}

export const graphColors: Record<string, string> = {
  blueGraph: '#2563eb',
  tealGraph: '#14b8a6',
  greenGraph: '#22c55e',
  amberGraph: '#f59e0b',
  redGraph: '#ef4444',
  violetGraph: '#7c3aed',
  slateGraph: '#475569',
}

const typography = {
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  headingFontSize: {
    h1: '2.8rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1rem',
    h6: '0.875rem',
  },
  bodyFontSize: {
    body1: '1rem',
    body2: '0.875rem',
    caption: '0.75rem',
  },
}

const spacing = {
  unit: 8,
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '2.5rem',
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  borderRadius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    round: '50%',
  },
}

const colors = {
  dark: {
    background: '#101828',
    paper: '#1d2939',
    divider: '#344054',
    primary: '#60a5fa',
    primaryDark: '#2563eb',
    primaryLight: '#93c5fd',
    secondaryBackground: '#344054',
    surfacePrimary: '#0f172a',
    surfaceSecondary: '#27364a',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textTertiary: '#98a2b3',
    textWhite: '#ffffff',
    grey: '#667085',
    boxShadow: 'rgba(2, 6, 23, 0.35)',
    linkBlue: '#93c5fd',
    success: commonColors.green,
    danger: commonColors.red,
    ...commonColors,
    ...graphColors,
  },
  light: {
    background: '#eef2f7',
    paper: '#ffffff',
    divider: '#d7dde8',
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    primaryLight: '#eff6ff',
    secondaryBackground: '#f5f7fb',
    surfacePrimary: '#ffffff',
    surfaceSecondary: '#e2e8f0',
    textPrimary: '#172033',
    textSecondary: '#526070',
    textTertiary: '#667085',
    textWhite: '#ffffff',
    grey: '#98a2b3',
    boxShadow: 'rgba(17, 24, 39, 0.1)',
    linkBlue: '#2563eb',
    success: commonColors.green,
    danger: commonColors.red,
    ...commonColors,
    ...graphColors,
  },
}

const theme: Theme = {
  [ThemeModes.dark]: {
    colors: colors.dark,
    images: {},
    spacing,
    typography,
  },
  [ThemeModes.light]: {
    colors: colors.light,
    images: {},
    spacing,
    typography,
  },
}

export default theme
