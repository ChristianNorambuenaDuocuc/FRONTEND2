
import { Link } from "react-router"

function Navigation() {
  return (
    <header className="navbar bg-white border-bottom shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="navbar-brand fw-bold text-success">
          Supermercado Central
        </Link>

        <nav className="d-flex gap-3">

          <Link to="/" className="nav-link">
            Inicio
          </Link>

          <Link to="/quienes-somos" className="nav-link">
            Quiénes somos
          </Link>

          <Link to="/contactanos" className="nav-link">
            Contáctanos
          </Link>

        </nav>

      </div>
    </header>
  )
}

export default Navigation
