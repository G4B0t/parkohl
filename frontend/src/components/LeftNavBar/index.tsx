import { NavLink } from 'react-router-dom'

const LeftNavBar = () => {
  return (
    <aside className="left-navbar">
      <div className="brand">PARKOHL</div>
      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
      </nav>
    </aside>
  )
}

export default LeftNavBar
