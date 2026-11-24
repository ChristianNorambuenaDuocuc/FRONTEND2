import { useState } from 'react'
import { useInventario } from '../hooks/useInventario'
import { validarServicio } from '../utils/validarServicio'
import CampoFormulario from '../components/CampoFormulario'
import BotonPrimario from '../components/BotonPrimario'

function AgregarServicio() {
  // Estado local del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    proveedor: '',
    tipo: 'Vuelo',
    destino: '',
    fecha: '',
    precio: '',
    stock: ''
  })

  const [mensaje, setMensaje] = useState('')
  const [errores, setErrores] = useState({})

  // Accedemos a la función del estado global
  const { agregarServicio } = useInventario()

  // Actualizar los campos del formulario
  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  // Guardar un servicio
  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const servicio = {
      nombre: formulario.nombre.trim(),
      proveedor: formulario.proveedor.trim(),
      tipo: formulario.tipo,
      destino: formulario.destino.trim(),
      fecha: formulario.fecha,
      precio: Number(formulario.precio),
      stock: Number(formulario.stock)
    }

    const erroresEncontrados = validarServicio(servicio)

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      setMensaje('')
      return
    }

    setErrores({})
    agregarServicio(servicio)

    setFormulario({
      nombre: '',
      proveedor: '',
      tipo: 'Vuelo',
    destino: '',
    fecha: '',
    precio: '',
      stock: ''
    })

    setMensaje('¡Servicio agregado correctamente!')
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Agregar servicio</h1>
      <p className="mt-3 text-gray-600">Registra nuevos vuelos y hoteles en el catálogo de la agencia de viajes.</p>

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
      >
        <CampoFormulario
          nombre="nombre"
          etiqueta="Nombre del servicio"
          valor={formulario.nombre}
          alCambiar={manejarCambio}
          error={errores.nombre}
          placeholder="Ej: Santiago - Puerto Montt"
        />
        <CampoFormulario
          nombre="proveedor"
          etiqueta="Aerolínea o empresa hotelera"
          valor={formulario.proveedor}
          alCambiar={manejarCambio}
          error={errores.proveedor}
          placeholder="Ej: LATAM"
        />
        <div>
          <label htmlFor="tipo" className="mb-2 block font-medium">Tipo de servicio</label>
          <select id="tipo" name="tipo" value={formulario.tipo} onChange={manejarCambio} className="w-full rounded-lg border border-gray-300 p-3">
            <option>Vuelo</option><option>Hotel</option>
          </select>
          {errores.tipo && <p className="text-red-600">{errores.tipo}</p>}
        </div>
        <CampoFormulario nombre="destino" etiqueta="Destino" valor={formulario.destino} alCambiar={manejarCambio} error={errores.destino} placeholder="Ej: Puerto Varas" />
        <CampoFormulario nombre="fecha" etiqueta="Fecha de vuelo o llegada" valor={formulario.fecha} alCambiar={manejarCambio} error={errores.fecha} tipoInput="date" />
        <CampoFormulario nombre="precio" etiqueta="Precio unitario (CLP)" valor={formulario.precio} alCambiar={manejarCambio} error={errores.precio} tipoInput="number" minimo="1" />
        <CampoFormulario
          nombre="stock"
          etiqueta="Cupos disponibles"
          valor={formulario.stock}
          alCambiar={manejarCambio}
          error={errores.stock}
          placeholder="Ej: 10"
          tipoInput="number"
          minimo="1"
        />

        <BotonPrimario type="submit">Guardar servicio</BotonPrimario>

        {mensaje && (
          <p role="status" className="text-center text-central">{mensaje}</p>
        )}
      </form>
    </section>
  )
}

export default AgregarServicio
