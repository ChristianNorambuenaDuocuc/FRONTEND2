

import { useInventario } from '../hooks/useInventario'
import { useState } from 'react'
import { Link } from 'react-router'

function Inventario() {
  const { productos } = useInventario()
  const [categoria, setCategoria] = useState('todas')

  const categorias = [...new Set(productos.map((producto) => producto.tipo))]

  const productosFiltrados = categoria === 'todas'
  ? productos
  : productos.filter((producto) => producto.tipo === categoria)

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-emerald-800">
        Inventario de productos
      </h1>

      <p className="mt-3 text-gray-600">
        Consulta los artículos disponibles.
      </p>

      <div className="mt-6">
  <label htmlFor="categoria" className="mr-3 font-medium">
    Filtrar por categoría:
  </label>

  <select
    id="categoria"
    value={categoria}
    onChange={(evento) => setCategoria(evento.target.value)}
    className="rounded-lg border border-gray-300 bg-white p-2"
  >
    <option value="todas">Todas las categorías</option>

    {categorias.map((tipo) => (
      <option key={tipo} value={tipo}>
        {tipo}
      </option>
    ))}
  </select>
</div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left">
          <thead className="bg-emerald-700 text-white">
            <tr>
              <th className="px-5 py-3">Nombre</th>
              <th className="px-5 py-3">Marca</th>
              <th className="px-5 py-3">Tipo</th>
              <th className="px-5 py-3">Stock disponible</th>
            </tr>
          </thead>

          <tbody>
            {productosFiltrados.map((producto) => (
              <tr key={producto.id} className="border-b border-gray-200">
                <td className="px-5 py-3">
                <Link
  to={`/producto/${producto.id}`}
  className="font-bold text-blue-600 underline"
>
  {producto.nombre} - VER DETALLE
</Link>
              </td>
                <td className="px-5 py-3">{producto.marca}</td>
                <td className="px-5 py-3">{producto.tipo}</td>
                <td className="px-5 py-3">{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {productosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No hay productos disponibles en esta categoría.
        </p>
      )}
    </section>
  )
}

export default Inventario
