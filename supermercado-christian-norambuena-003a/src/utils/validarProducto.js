const patronTexto = /^[\p{L}\p{N} .,'&/-]+$/u

function validarTexto(texto) {
  return patronTexto.test(texto.trim())
}

export function validarProducto(producto) {
  const errores = {}

  if (!producto.nombre.trim()) {
  errores.nombre = 'El nombre es obligatorio'
} else if (!validarTexto(producto.nombre)) {
  errores.nombre = 'El nombre contiene caracteres no permitidos'
}
if (!producto.marca.trim()) {
  errores.marca = 'La marca es obligatoria'
} else if (!validarTexto(producto.marca)) {
    errores.marca = 'La marca contiene caracteres no permitidos'
  }

  if (!producto.tipo.trim()) {
  errores.tipo = 'El tipo es obligatorio'
  } else if (!validarTexto(producto.tipo)) {
    errores.tipo = 'El tipo contiene caracteres no permitidos'
  }

  return errores
}