
import { Link, useParams } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function DetalleProducto() {
  const { id } = useParams()
  const { productos } = useInventario()

  const producto = productos.find(
    (producto) => producto.id === id
  )

  if (!producto) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold">
          Producto no encontrado
        </h1>
        <Link to="/inventario" className="text-emerald-700">
          Volver al inventario
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold text-emerald-800">
        Detalle del producto
      </h1>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">
          {producto.nombre}
        </h2>

        <p className="mb-2">Marca: {producto.marca}</p>
        <p className="mb-2">Categoría: {producto.tipo}</p>
        <p className="mb-4">
          Stock disponible: {producto.stock}
        </p>

        <Link
          to="/inventario"
          className="text-emerald-700 hover:underline"
        >
          Volver al inventario
        </Link>
      </div>
    </section>
  )
}

export default DetalleProducto
