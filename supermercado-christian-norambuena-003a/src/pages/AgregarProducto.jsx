

import { useState, useContext } from 'react'
import { InventarioContext } from '../context/InventarioContext'

function AgregarProducto() {

  // Estado local del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    marca: '',
    tipo: ''
  })

  const [mensaje, setMensaje] = useState('')

  // Accedemos a la función del estado global
  const { agregarProducto } = useContext(InventarioContext)

  // Actualizar los campos del formulario
  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  // Guardar un producto
  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const producto = {
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo.trim()
    }

    if (!producto.nombre || !producto.marca || !producto.tipo) {
      setMensaje('Completa todos los campos.')
      return
    }

    agregarProducto(producto)

    setFormulario({
      nombre: '',
      marca: '',
      tipo: ''
    })

    setMensaje('¡Producto agregado correctamente!')
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">

      <h1 className="text-3xl font-bold text-emerald-800">
        Agregar producto
      </h1>

      <p className="mt-3 text-gray-600">
        Registra nuevos artículos en el inventario.
      </p>

      <form
        onSubmit={manejarEnvio}
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
      >

        <div>
          <label htmlFor="nombre" className="mb-2 block font-medium">
            Nombre del producto
          </label>

          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Ej: Leche"
          />
        </div>

        <div>
          <label htmlFor="marca" className="mb-2 block font-medium">
            Marca
          </label>

          <input
            id="marca"
            type="text"
            name="marca"
            value={formulario.marca}
            onChange={manejarCambio}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Ej: Colun"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="mb-2 block font-medium">
            Tipo de producto
          </label>

          <input
            id="tipo"
            type="text"
            name="tipo"
            value={formulario.tipo}
            onChange={manejarCambio}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Ej: Lácteos"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Guardar producto
        </button>

        {mensaje && (
          <p role="status" className="text-center text-emerald-700">
            {mensaje}
          </p>
        )}

      </form>
    </section>
  )
}

export default AgregarProducto

