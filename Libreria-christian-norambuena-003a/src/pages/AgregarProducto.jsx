import { useState } from 'react'
import { useInventario } from '../hooks/useInventario'
import { validarProducto } from '../utils/validarProducto'
import CampoFormulario from '../components/CampoFormulario'
import BotonPrimario from '../components/BotonPrimario'

function AgregarProducto() {
  // Estado local del formulario
  const [formulario, setFormulario] = useState({
    titulo: '',
    autor: '',
    genero: '',
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

  // Guardar un libro
  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const libro = {
      titulo: formulario.titulo.trim(),
      autor: formulario.autor.trim(),
      genero: formulario.genero.trim(),
      stock: Number(formulario.stock)
    }

    const erroresEncontrados = validarProducto(libro)

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      setMensaje('')
      return
    }

    setErrores({})
    agregarProducto(libro)

    setFormulario({
      titulo: '',
      autor: '',
      genero: '',
      stock: ''
    })

    setMensaje('¡Libro agregado correctamente!')
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-central">Agregar libro</h1>
      <p className="mt-3 text-gray-600">Registra nuevos títulos en el catálogo de la librería.</p>

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
      >
        <CampoFormulario
          nombre="titulo"
          etiqueta="Título del libro"
          valor={formulario.titulo}
          alCambiar={manejarCambio}
          error={errores.titulo}
          placeholder="Ej: El principito"
        />
        <CampoFormulario
          nombre="autor"
          etiqueta="Autor o autora"
          valor={formulario.autor}
          alCambiar={manejarCambio}
          error={errores.autor}
          placeholder="Ej: Antoine de Saint-Exupéry"
        />
        <CampoFormulario
          nombre="genero"
          etiqueta="Género literario"
          valor={formulario.genero}
          alCambiar={manejarCambio}
          error={errores.genero}
          placeholder="Ej: Literatura infantil"
        />
        <CampoFormulario
          nombre="stock"
          etiqueta="Ejemplares disponibles"
          valor={formulario.stock}
          alCambiar={manejarCambio}
          error={errores.stock}
          placeholder="Ej: 10"
          tipoInput="number"
          minimo="1"
        />

        <BotonPrimario type="submit">Guardar libro</BotonPrimario>

        {mensaje && (
          <p role="status" className="text-center text-central">{mensaje}</p>
        )}
      </form>
    </section>
  )
}

export default AgregarProducto
