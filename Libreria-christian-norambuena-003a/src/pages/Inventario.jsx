import { useInventario } from '../hooks/useInventario'
import { useState } from 'react'
import { Link } from 'react-router'

function Inventario() {
  const { productos } = useInventario()
  const [categoria, setCategoria] = useState('todas')

  const categorias = [...new Set(productos.map((producto) => producto.genero))]

  const productosFiltrados = categoria === 'todas'
    ? productos
    : productos.filter((producto) => producto.genero === categoria)

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Catálogo de libros</h1>
      <p className="mt-3 text-gray-600">Explora los libros disponibles en nuestra librería.</p>

      <div className="mt-6">
        <label htmlFor="categoria" className="mr-3 font-medium">Filtrar por género:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          className="rounded-lg border border-gray-300 bg-white p-2"
        >
          <option value="todas">Todos los géneros</option>
          {categorias.map((genero) => (
            <option key={genero} value={genero}>{genero}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left">
          <thead className="bg-central text-white">
            <tr>
              <th className="px-5 py-3">Título</th>
              <th className="px-5 py-3">Autor</th>
              <th className="px-5 py-3">Género</th>
              <th className="px-5 py-3">Ejemplares disponibles</th>
              <th className="px-5 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => (
              <tr key={producto.id} className="border-b border-gray-200">
                <td className="px-5 py-3">{producto.titulo}</td>
                <td className="px-5 py-3">{producto.autor}</td>
                <td className="px-5 py-3">{producto.genero}</td>
                <td className="px-5 py-3">{producto.stock}</td>
                <td className="px-5 py-3">
                  <Link
                    to={`/libro/${producto.id}`}
                    className="inline-block rounded-lg bg-central px-4 py-2 text-sm font-semibold text-white hover:bg-central-dark"
                  >
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {productosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No hay libros disponibles en este género.
        </p>
      )}
    </section>
  )
}

export default Inventario
