import { Link } from 'react-router'

function PaginaNoEncontrada() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="mb-3 text-4xl font-bold text-central">Página no encontrada</h1>
      <p className="mb-6 text-slate-600">La página que buscas no existe en nuestra librería.</p>
      <Link to="/" className="rounded-lg bg-central px-6 py-3 font-semibold text-white hover:bg-central-dark">
        Volver al inicio
      </Link>
    </section>
  )
}

export default PaginaNoEncontrada
