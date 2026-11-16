import { Link, useParams } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function DetalleProducto() {
  const { id } = useParams()
  const { productos, agregarAlCarrito } = useInventario()

  const libro = productos.find((producto) => producto.id === id)

  if (!libro) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold">Libro no encontrado</h1>
        <Link to="/catalogo" className="text-central">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold text-central">Detalle del libro</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">{libro.titulo}</h2>
        <p className="mb-2">Autor: {libro.autor}</p>
        <p className="mb-2">Género: {libro.genero}</p>
        <p className="mb-4">Ejemplares disponibles: {libro.stock}</p>

        <button
          type="button"
          onClick={() => agregarAlCarrito(libro.id)}
          disabled={libro.stock === 0}
          className="mb-4 block rounded-lg bg-central px-5 py-3 font-semibold text-white hover:bg-central-dark disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {libro.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
        <Link to="/catalogo" className="text-central hover:underline">Volver al catálogo</Link>
      </div>
    </section>
  )
}

export default DetalleProducto
