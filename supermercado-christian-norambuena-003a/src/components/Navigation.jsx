
import { Link,NavLink } from "react-router"
import { useState } from "react"

function Navigation() {

const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="navbar navbar-expand-md bg-white border-bottom shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="navbar-brand fw-bold text-success">
          Supermercado Central
        </Link>


        <button
          type="button"
          className="navbar-toggler d-md-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label="Abrir o cerrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        
        
          
<nav
  id="menu-principal"
  className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}
>
  <div className="navbar-nav ms-md-auto gap-md-3">
    <NavLink
      to="/"
      end
      className="nav-link"
      onClick={() => setMenuAbierto(false)}
    >
      Inicio
    </NavLink>

    <NavLink
      to="/quienes-somos"
      className="nav-link"
      onClick={() => setMenuAbierto(false)}
    >
      Quiénes somos
    </NavLink>

    <NavLink
      to="/contactanos"
      className="nav-link"
      onClick={() => setMenuAbierto(false)}
    >
      Contáctanos
    </NavLink>
  </div>
</nav>




      </div>
    </header>
  )
}

export default Navigation
