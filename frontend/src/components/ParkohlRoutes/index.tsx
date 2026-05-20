import { Route, Routes } from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import { routes } from './components/Routes'
import SafeRoute from './components/SafeRoute'

const ParkohlRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      {Object.entries(routes).map(([routeName, settings]) => {
        const Component = settings.component

        return (
          <Route
            key={routeName}
            path={settings.url}
            element={
              <SafeRoute isProtected={settings.isProtected}>
                <Component />
              </SafeRoute>
            }
          />
        )
      })}
    </Routes>
  )
}

export default ParkohlRoutes
