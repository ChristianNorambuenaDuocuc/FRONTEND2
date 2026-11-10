
import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function Carrito() {
  const {
    productos,
    carrito,
    agregarAlCarrito,
    disminuirDelCarrito
  } = useInventario()

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-emerald-800">
        Carrito de compras
      </h1>

      <p className="mt-3 text-gray-600">
        Administra los productos agregados a tu carrito.
      </p>

      {carrito.length === 0 ? (
        <div className="mt-8 rounded-xl bg-white p-6 text-center shadow-md">
          <p className="text-gray-500">
            Tu carrito está vacío.
          </p>

          <Link
            to="/inventario"
            className="mt-4 inline-block text-emerald-700 hover:underline"
          >
            Ver inventario
          </Link>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
          <table className="w-full text-left">
            <thead className="bg-emerald-700 text-white">
              <tr>
                <th className="px-5 py-3">Producto</th>
                <th className="px-5 py-3">Marca</th>
                <th className="px-5 py-3">Cantidad</th>
                <th className="px-5 py-3">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {carrito.map((producto) => {
                const disponible = productos.find(
                  (p) => p.id === producto.id
                )

                return (
                  <tr key={producto.id} className="border-b border-gray-200">
                    <td className="px-5 py-3">
                      {producto.nombre}
                    </td>

                    <td className="px-5 py-3">
                      {producto.marca}
                    </td>

                    <td className="px-5 py-3">
                      {producto.cantidad}
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => disminuirDelCarrito(producto.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          −
                        </button>

                        <button
                          type="button"
                          onClick={() => agregarAlCarrito(producto.id)}
                          disabled={!disponible || disponible.stock === 0}
                          className="rounded-lg bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Carrito
