import { useAppStore } from '@store/useAppStore'

const TopNavBar = () => {
  const logout = useAppStore((state) => state.logout)
  const user = useAppStore((state) => state.user)

  return (
    <header className="top-navbar">
      <span>{user?.name ?? 'Guest'}</span>
      {user && (
        <button type="button" className="text-button" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  )
}

export default TopNavBar
