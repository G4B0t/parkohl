import { Navigate } from 'react-router-dom'
import { useAppStore } from '@store/useAppStore'

const HomeRoute = () => {
  const isAuthenticated = useAppStore((state) => state.isAuthenticated)

  return isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  )
}

export default HomeRoute
