import Layout from '@layouts/Desktop'
import { Navigate } from 'react-router-dom'
import { useAppStore } from '@store/useAppStore'

import { SafeRouteProps } from './types'

const SafeRoute = ({ children, isProtected }: SafeRouteProps) => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Layout>{children}</Layout>
}

export default SafeRoute
