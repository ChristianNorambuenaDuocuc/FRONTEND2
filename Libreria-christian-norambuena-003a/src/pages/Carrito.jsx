import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function Carrito() {
  const { productos, carrito, agregarAlCarrito, disminuirDelCarrito } = useInventario()

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Carrito de libros</h1>
      <p className="mt-3 text-gray-600">Administra los libros agregados a tu carrito.</p>

      {carrito.length === 0 ? (
        <div className="mt-8 rounded-xl bg-white p-6 text-center shadow-md">
          <p className="text-gray-500">Tu carrito está vacío.</p>
          <Link to="/catalogo" className="mt-4 inline-block text-central hover:underline">
            Ver catálogo
          </Link>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
          <table className="w-full text-left">
            <thead className="bg-central text-white">
              <tr>
                <th className="px-5 py-3">Título</th>
                <th className="px-5 py-3">Autor</th>
                <th className="px-5 py-3">Cantidad</th>
                <th className="px-5 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((libro) => {
                const disponible = productos.find((p) => p.id === libro.id)
                return (
                  <tr key={libro.id} className="border-b border-gray-200">
                    <td className="px-5 py-3">{libro.titulo}</td>
                    <td className="px-5 py-3">{libro.autor}</td>
                    <td className="px-5 py-3">{libro.cantidad}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => disminuirDelCarrito(libro.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                          aria-label={`Quitar una unidad de ${libro.titulo}`}
                        >
                          −
                        </button>
                        <button
                          type="button"
                          onClick={() => agregarAlCarrito(libro.id)}
                          disabled={!disponible || disponible.stock === 0}
                          className="rounded-lg bg-central px-4 py-2 text-white hover:bg-central-dark disabled:cursor-not-allowed disabled:bg-gray-400"
                          aria-label={`Agregar una unidad de ${libro.titulo}`}
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
