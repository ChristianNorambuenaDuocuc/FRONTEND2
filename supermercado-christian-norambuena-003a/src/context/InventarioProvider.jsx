
import { useState } from 'react'
import { InventarioContext } from './InventarioContext'
import { generarId } from '../utils/generarId'

function InventarioProvider({ children }) {

  const [productos, setProductos] = useState([])

  const agregarProducto = (nuevoProducto) => {
    setProductos((productosActuales) => [
      ...productosActuales,
      {
        id: generarId(),
        ...nuevoProducto
      }
    ])
  }

  return (
    <InventarioContext.Provider
      value={{ productos, agregarProducto }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
