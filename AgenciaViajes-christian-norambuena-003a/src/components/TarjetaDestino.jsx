import TarjetaServicio from './TarjetaServicio'

export default function TarjetaDestino({
    destino,
    destinoSeleccionado,
    setDestinoSeleccionado,
    servicios,
    cargandoServicios,
    errorServicios
}) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-md">

            <img
                src={destino.imagen}
                alt={destino.nombre}
                className="mb-4 h-48 w-full rounded-xl object-cover"
            />

            <h2 className="text-xl font-bold text-forest">
                📍 {destino.nombre}
            </h2>

            <p className="mb-4 text-stone-500">
                {destino.pais}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
                {destino.actividades.map(actividad => (
                    <span
                        key={actividad}
                        className="rounded-full bg-stone-100 px-3 py-1 text-sm"
                    >
                        {actividad}
                    </span>
                ))}
            </div>

            <button
                className="w-full rounded-lg bg-forest px-4 py-3 font-medium text-white transition-colors hover:bg-central"
                onClick={() => setDestinoSeleccionado(destino.id)}
            >
                Ver vuelos y hoteles
            </button>

            {destinoSeleccionado === destino.id && (
                <div className="mt-5 border-t border-stone-200 pt-4">

                    <h2 className="mb-3 font-bold text-forest">
                        Servicios disponibles
                    </h2>

                    {cargandoServicios && <p>Cargando servicios...</p>}

                    {errorServicios && <p>{errorServicios.message}</p>}

                    {servicios.map(servicio => (
                        <TarjetaServicio
                            key={servicio.id}
                            servicio={servicio}
                        />
                    ))}

                </div>
            )}

        </div>
    )
}