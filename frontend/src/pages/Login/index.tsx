import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@store/useAppStore'

const Login = () => {
  const loginAsDemo = useAppStore((state) => state.loginAsDemo)
  const navigate = useNavigate()

  const handleLogin = () => {
    loginAsDemo()
    navigate('/home')
  }

  return (
    <section className="auth-page">
      <div className="panel auth-panel">
        <p className="eyebrow">PARKOHL</p>
        <h1>Login</h1>
        <p className="summary">
          This placeholder keeps the routing pattern ready until the backend
          authentication flow is connected.
        </p>
        <button type="button" onClick={handleLogin}>
          Continue as demo
        </button>
      </div>
    </section>
  )
}

export default Login
