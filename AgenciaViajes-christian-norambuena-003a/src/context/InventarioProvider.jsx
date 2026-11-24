
import { useState } from 'react'
import { InventarioContext } from './InventarioContext'
import { serviciosIniciales } from '../data/servicios'
import { generarId } from '../utils/generarId'

function InventarioProvider({ children }) {

  const [servicios, setServicios] = useState(serviciosIniciales)
  const [reservas, setReservas] = useState([])
  const [categorias, setCategorias] = useState([])

  const agregarServicio = (nuevoServicio) => {
    setServicios((serviciosActuales) => [
      ...serviciosActuales,
      {
        id: generarId(),
        ...nuevoServicio
      }
    ])
  }


const agregarReserva = (id) => {
  const servicio = servicios.find((p) => p.id === id)
  

  if (!servicio || servicio.stock <= 0) {
    return
  }

  // Descontar una unidad del inventario
  setServicios((actuales) =>
    actuales.map((p) =>
      p.id === id
        ? { ...p, stock: p.stock - 1 }
        : p
    )
  )

  // Reservar una unidad a las reservas
  setReservas((actuales) => {
    const existente = actuales.find((p) => p.id === id)

    if (existente) {
      return actuales.map((p) =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    }

    return [...actuales, { ...servicio, cantidad: 1 }]
  })
}


const disminuirReserva = (id) => {
  const servicio = reservas.find((p) => p.id === id)

  if (!servicio) {
    return
  }

  // Disminuir una unidad de las reservas
  setReservas((actuales) =>
    actuales
      .map((p) =>
        p.id === id
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
      .filter((p) => p.cantidad > 0)
  )

  // Devolver una unidad al inventario
  setServicios((actuales) =>
    actuales.map((p) =>
      p.id === id
        ? { ...p, stock: p.stock + 1 }
        : p
    )
  )
}





  return (
    <InventarioContext.Provider
      value={{
  servicios,
  agregarServicio,
  reservas,
  agregarReserva,
  disminuirReserva,
  categorias,
setCategorias,
}}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
