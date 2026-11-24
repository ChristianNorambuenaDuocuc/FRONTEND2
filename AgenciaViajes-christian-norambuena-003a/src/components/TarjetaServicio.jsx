export default function TarjetaServicio({ servicio }) {
    return (
        <div className="mb-3 rounded-xl bg-stone-50 p-4">

            <h3 className="font-bold">
                {servicio.tipo === 'Vuelo' ? '✈️' : '🏨'}
                {' '}{servicio.nombre}
            </h3>

            <p className="my-2 text-xl font-bold text-central">
                ${servicio.precio.toLocaleString('es-CL')}
            </p>

            <p className="text-sm">
                Fecha: {servicio.fecha}
            </p>

            <p className="text-sm text-green-700">
                Disponibilidad: {servicio.stock}
            </p>

        </div>
    )
}