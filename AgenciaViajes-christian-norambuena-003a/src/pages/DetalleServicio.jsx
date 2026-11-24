import { Link, useParams } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function DetalleServicio() {
  const { id } = useParams()
  const { servicios, agregarReserva } = useInventario()

  const servicio = servicios.find((servicio) => servicio.id === id)

  if (!servicio) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
        <Link to="/catalogo" className="text-central">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold text-central">Detalle del servicio</h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">{servicio.nombre}</h2>
        <p className="mb-2">Proveedor: {servicio.proveedor}</p>
        <p className="mb-2">Tipo: {servicio.tipo}</p>
        <p className="mb-2">Destino: {servicio.destino}</p>
        <p className="mb-2">Fecha: {servicio.fecha}</p>
        <p className="mb-2">Precio: ${servicio.precio.toLocaleString('es-CL')}{servicio.tipo === 'Hotel' ? ' por noche' : ' por pasajero'}</p>
        <p className="mb-4">Cupos disponibles: {servicio.stock}</p>

        <button
          type="button"
          onClick={() => agregarReserva(servicio.id)}
          disabled={servicio.stock === 0}
          className="mb-4 block rounded-lg bg-central px-5 py-3 font-semibold text-white hover:bg-central-dark disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {servicio.stock === 0 ? 'Sin disponibilidad' : 'Agregar a reservas'}
        </button>
        <Link to="/catalogo" className="text-central hover:underline">Volver al catálogo</Link>
      </div>
    </section>
  )
}

export default DetalleServicio
