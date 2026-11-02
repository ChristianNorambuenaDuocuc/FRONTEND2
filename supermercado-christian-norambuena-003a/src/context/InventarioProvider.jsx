
import { useState } from 'react'
import { InventarioContext } from './InventarioContext'

function InventarioProvider({ children }) {

  const [productos, setProductos] = useState([])

  const agregarProducto = (nuevoProducto) => {
    setProductos((productosActuales) => [
      ...productosActuales,
      {
        id: crypto.randomUUID(),
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
