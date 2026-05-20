import { useAppStore } from '@store/useAppStore'

const Home = () => {
  const count = useAppStore((state) => state.count)
  const increment = useAppStore((state) => state.increment)
  const reset = useAppStore((state) => state.reset)

  return (
    <section className="page-stack">
      <div>
        <p className="eyebrow">PARKOHL frontend</p>
        <h1>Application shell ready</h1>
        <p className="summary">
          The frontend now follows the same modular direction as VIPER: routes,
          layout, pages, shared components, API, services, types, and store.
        </p>
      </div>

      <div className="panel">
        <div className="counter-row">
          <span className="counter-label">Global state counter</span>
          <strong>{count}</strong>
        </div>
        <div className="actions">
          <button type="button" onClick={increment}>
            Increment
          </button>
          <button type="button" className="secondary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
