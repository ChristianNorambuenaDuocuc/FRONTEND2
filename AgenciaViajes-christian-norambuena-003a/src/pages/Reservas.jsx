import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario'

function Reservas() {
  const { servicios, reservas, agregarReserva, disminuirReserva } = useInventario()

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Mis reservas</h1>
      <p className="mt-3 text-gray-600">Administra los vuelos y hoteles de tu reserva.</p>

      {reservas.length === 0 ? (
        <div className="mt-8 rounded-xl bg-white p-6 text-center shadow-md">
          <p className="text-gray-500">No tienes reservas.</p>
          <Link to="/catalogo" className="mt-4 inline-block text-central hover:underline">
            Ver catálogo
          </Link>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
          <table className="w-full text-left">
            <thead className="bg-central text-white">
              <tr>
                <th className="px-5 py-3">Nombre</th>
                <th className="px-5 py-3">Proveedor</th>
                <th className="px-5 py-3">Cantidad</th>
                <th className="px-5 py-3">Subtotal</th>
                <th className="px-5 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((servicio) => {
                const disponible = servicios.find((p) => p.id === servicio.id)
                return (
                  <tr key={servicio.id} className="border-b border-gray-200">
                    <td className="px-5 py-3">{servicio.nombre}</td>
                    <td className="px-5 py-3">{servicio.proveedor}</td>
                    <td className="px-5 py-3">{servicio.cantidad}</td>
                    <td className="px-5 py-3">${(servicio.cantidad * servicio.precio).toLocaleString('es-CL')}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => disminuirReserva(servicio.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                          aria-label={`Quitar una unidad de ${servicio.nombre}`}
                        >
                          −
                        </button>
                        <button
                          type="button"
                          onClick={() => agregarReserva(servicio.id)}
                          disabled={!disponible || disponible.stock === 0}
                          className="rounded-lg bg-central px-4 py-2 text-white hover:bg-central-dark disabled:cursor-not-allowed disabled:bg-gray-400"
                          aria-label={`Reservar una unidad de ${servicio.nombre}`}
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
          <p className="p-5 text-right font-bold">Total: ${reservas.reduce((total, servicio) => total + servicio.precio * servicio.cantidad, 0).toLocaleString('es-CL')}</p>
        </div>
      )}
    </section>
  )
}

export default Reservas
