

import { useContext } from 'react'
import { InventarioContext } from '../context/InventarioContext'

function Inventario() {
  const { productos } = useContext(InventarioContext)

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-emerald-800">
        Inventario de productos
      </h1>

      <p className="mt-3 text-gray-600">
        Consulta los artículos disponibles.
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left">
          <thead className="bg-emerald-700 text-white">
            <tr>
              <th className="px-5 py-3">Nombre</th>
              <th className="px-5 py-3">Marca</th>
              <th className="px-5 py-3">Tipo</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-b border-gray-200">
                <td className="px-5 py-3">{producto.nombre}</td>
                <td className="px-5 py-3">{producto.marca}</td>
                <td className="px-5 py-3">{producto.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {productos.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No hay productos registrados en el inventario.
        </p>
      )}
    </section>
  )
}

export default Inventario
