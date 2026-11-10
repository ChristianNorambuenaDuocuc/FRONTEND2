
import { useState } from 'react'
import { InventarioContext } from './InventarioContext'
import { generarId } from '../utils/generarId'

function InventarioProvider({ children }) {

  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (nuevoProducto) => {
    setProductos((productosActuales) => [
      ...productosActuales,
      {
        id: generarId(),
        ...nuevoProducto
      }
    ])
  }


const agregarAlCarrito = (id) => {
  const producto = productos.find((p) => p.id === id)
  

  if (!producto || producto.stock <= 0) {
    return
  }

  // Descontar una unidad del inventario
  setProductos((actuales) =>
    actuales.map((p) =>
      p.id === id
        ? { ...p, stock: p.stock - 1 }
        : p
    )
  )

  // Agregar una unidad al carrito
  setCarrito((actuales) => {
    const existente = actuales.find((p) => p.id === id)

    if (existente) {
      return actuales.map((p) =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    }

    return [...actuales, { ...producto, cantidad: 1 }]
  })
}


const disminuirDelCarrito = (id) => {
  const producto = carrito.find((p) => p.id === id)

  if (!producto) {
    return
  }

  // Disminuir una unidad del carrito
  setCarrito((actuales) =>
    actuales
      .map((p) =>
        p.id === id
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
      .filter((p) => p.cantidad > 0)
  )

  // Devolver una unidad al inventario
  setProductos((actuales) =>
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
  productos,
  agregarProducto,
  carrito,
  agregarAlCarrito,
  disminuirDelCarrito
}}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
