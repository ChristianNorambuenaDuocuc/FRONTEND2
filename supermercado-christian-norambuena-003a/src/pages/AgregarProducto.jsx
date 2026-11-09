
import { useState } from 'react'
import { useInventario } from '../hooks/useInventario'
import { validarProducto } from '../utils/validarProducto'
import CampoFormulario from '../components/CampoFormulario'
import BotonPrimario from '../components/BotonPrimario'

function AgregarProducto() {

  // Estado local del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    marca: '',
    tipo: '',
    stock: ''
  })

  const [mensaje, setMensaje] = useState('')
  const [errores, setErrores] = useState({})

  // Accedemos a la función del estado global
  const { agregarProducto } = useInventario()

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
      tipo: formulario.tipo.trim(),
      stock: Number(formulario.stock)
    }

    const erroresEncontrados = validarProducto(producto)

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      setMensaje('')
      return
    }

    setErrores({})

    agregarProducto(producto)

    setFormulario({
      nombre: '',
      marca: '',
      tipo: '',
      stock: ''
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
        noValidate
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
      >

        <CampoFormulario
          nombre="nombre"
          etiqueta="Nombre del producto"
          valor={formulario.nombre}
          alCambiar={manejarCambio}
          error={errores.nombre}
          placeholder="Ej: Leche"
        />

        <CampoFormulario
          nombre="marca"
          etiqueta="Marca"
          valor={formulario.marca}
          alCambiar={manejarCambio}
          error={errores.marca}
          placeholder="Ej: Colun"
        />

        <CampoFormulario
          nombre="tipo"
          etiqueta="Tipo de producto"
          valor={formulario.tipo}
          alCambiar={manejarCambio}
          error={errores.tipo}
          placeholder="Ej: Lácteos"
        />

        <CampoFormulario
          nombre="stock"
          etiqueta="Cantidad disponible"
          valor={formulario.stock}
          alCambiar={manejarCambio}
          error={errores.stock}
          placeholder="Ej: 10"
          tipoInput="number"
          minimo="1"
        />

        <BotonPrimario type="submit">
          Guardar producto
        </BotonPrimario>

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

