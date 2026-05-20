import ParkohlRoutes from '@components/ParkohlRoutes'
import { ThemeProvider } from 'styled-components'
import { ThemeModes } from '@themes/enums'
import theme from '@themes/theme'

const StyledApp = () => {
  return (
    <ThemeProvider theme={theme[ThemeModes.dark]}>
      <ParkohlRoutes />
    </ThemeProvider>
  )
}

export default StyledApp
