import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client/react'
import { OBTENER_SERVICIOS } from '../graphql/operaciones'
import TarjetaDestino from '../components/TarjetaDestino'


export default function Destinos() {

    const [destinos, setDestinos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    const [destinoSeleccionado, setDestinoSeleccionado] = useState(null)
    

    useEffect(() => {

        fetch('/api/destinos')
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los destinos')
                }
                return respuesta.json()
            })
            .then(datos => setDestinos(datos))
            .catch(error => setError(error))
            .finally(() => setCargando(false))

    }, [])



const { data, loading: cargandoServicios, error: errorServicios } =
    useQuery(OBTENER_SERVICIOS, {
        variables: {
            destinoId: destinoSeleccionado
        },
        skip: destinoSeleccionado === null
    })

const servicios = data?.servicios ?? []


    if (cargando) {
        return <p>Cargando destinos...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">

        <div className="mb-8 rounded-2xl bg-forest p-8 text-white">
            <h1 className="text-3xl font-bold">
                Explora tu próximo destino
            </h1>
            <p className="mt-2">
                Descubre nuevos lugares y planifica tu próxima aventura.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {destinos.map(destino => (
                <TarjetaDestino
                    key={destino.id}
                    destino={destino}
                    destinoSeleccionado={destinoSeleccionado}
                    setDestinoSeleccionado={setDestinoSeleccionado}
                    servicios={servicios}
                    cargandoServicios={cargandoServicios}
                    errorServicios={errorServicios}
                />
            ))}

        </div>
    </div>
)

}