import { Link } from 'react-router'

function PaginaNoEncontrada() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-7xl font-extrabold text-central">404</p>
      <h1 className="mt-5 text-3xl font-bold text-forest">Página no encontrada</h1>
      <p className="mt-3 text-slate-600">La página que buscas no existe.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-central px-6 py-3 font-semibold text-white transition-colors hover:bg-central-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-central"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default PaginaNoEncontrada
