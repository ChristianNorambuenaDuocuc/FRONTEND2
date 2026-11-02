
import { Link } from "react-router"

function PaginaNoEncontrada() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>

      <h2>Página no encontrada</h2>

      <p className="text-secondary">
        La página que buscas no existe.
      </p>

      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </section>
  )
}

export default PaginaNoEncontrada
