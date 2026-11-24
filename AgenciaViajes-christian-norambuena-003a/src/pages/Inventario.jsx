import { useInventario } from '../hooks/useInventario'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Inventario() {
  const { servicios, categorias, setCategorias } = useInventario()
  const [categoria, setCategoria] = useState('todas')
  const [cargando, setCargando] = useState(categorias.length === 0)
const [error, setError] = useState('')
const [intento, setIntento] = useState(0)

  useEffect(() => {
    if (categorias.length > 0) {
  return
}
  const controller = new AbortController()

  setCargando(true)
  setError('')

  fetch('/api/categorias', {
    signal: controller.signal
  })
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error('Error al obtener las categorías')
      }

      return respuesta.json()
    })
    .then((datos) => {
      if (!controller.signal.aborted) {
        setCargando(false)
        setCategorias(datos.map((item) => item.nombre))
      }
    })
    .catch((error) => {
      if (error.name !== 'AbortError' && !controller.signal.aborted) {
        setError('No se pudieron cargar las categorías')
      }
    })
    .finally(() => {
      if (!controller.signal.aborted) {
        setCargando(false)
      }
    })

  return () => controller.abort()
}, [intento,categorias.length, setCategorias])

  const serviciosFiltrados = categoria === 'todas'
    ? servicios
    : servicios.filter((servicio) => servicio.tipo === categoria)

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Catálogo de vuelos y hoteles</h1>
      <p className="mt-3 text-gray-600">Explora vuelos y hoteles. Los precios y cupos son simulados.</p>
      {cargando && (
        <p role="status" className="mt-4 text-blue-600">
          Cargando categorías...
        </p>
      )}

      {error && (
  <div className="mt-4">
    <p role="alert" className="text-red-600">
      {error}
    </p>

    <button
      type="button"
      onClick={() => setIntento((actual) => actual + 1)}
      className="mt-3 rounded-lg bg-central px-4 py-2 text-white"
    >
      Reintentar
    </button>
  </div>
)}


      <div className="mt-6">
        <label htmlFor="categoria" className="mr-3 font-medium">Filtrar por tipo:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          className="rounded-lg border border-gray-300 bg-white p-2"
        >
          <option value="todas">Todos los servicios</option>
          {categorias.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left">
          <thead className="bg-central text-white">
            <tr>
              <th className="px-5 py-3">Nombre</th>
              <th className="px-5 py-3">Proveedor</th>
              <th className="px-5 py-3">Tipo</th>
              <th className="px-5 py-3">Destino</th>
              <th className="px-5 py-3">Precio (CLP)</th>
              <th className="px-5 py-3">Cupos disponibles</th>
              <th className="px-5 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {serviciosFiltrados.map((servicio) => (
              <tr key={servicio.id} className="border-b border-gray-200">
                <td className="px-5 py-3">{servicio.nombre}</td>
                <td className="px-5 py-3">{servicio.proveedor}</td>
                <td className="px-5 py-3">{servicio.tipo}</td>
                <td className="px-5 py-3">{servicio.destino}</td>
                <td className="px-5 py-3">${servicio.precio.toLocaleString('es-CL')}{servicio.tipo === 'Hotel' ? ' / noche' : ''}</td>
                <td className="px-5 py-3">{servicio.stock}</td>
                <td className="px-5 py-3">
                  <Link
                    to={`/servicio/${servicio.id}`}
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

      {serviciosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No hay servicios disponibles en esta categoría.
        </p>
      )}
    </section>
  )
}

export default Inventario
