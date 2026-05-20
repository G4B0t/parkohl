import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="page-stack">
      <div className="panel">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="summary">The page you requested does not exist.</p>
        <Link className="button-link" to="/">
          Go back
        </Link>
      </div>
    </section>
  )
}

export default NotFound
