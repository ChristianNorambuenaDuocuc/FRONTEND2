const patronTexto = /^[\p{L}\p{N} .,'&/\-:;¡!¿?()]+$/u

function validarTexto(texto) {
  return patronTexto.test(texto.trim())
}

export function validarServicio(servicio) {
  const errores = {}

  if (!servicio.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (!validarTexto(servicio.nombre)) {
    errores.nombre = 'El nombre contiene caracteres no permitidos'
  }

  if (!servicio.proveedor.trim()) {
    errores.proveedor = 'El proveedor es obligatorio'
  } else if (!validarTexto(servicio.proveedor)) {
    errores.proveedor = 'El proveedor contiene caracteres no permitidos'
  }

  if (!servicio.tipo.trim()) {
    errores.tipo = 'El tipo es obligatorio'
  } else if (!['Vuelo', 'Hotel'].includes(servicio.tipo)) {
    errores.tipo = 'El tipo contiene caracteres no permitidos'
  }

  if (!Number.isInteger(servicio.stock) || servicio.stock < 1) {
    errores.stock = 'Ingresa una cantidad entera mayor que cero'
  }

  if (!validarTexto(servicio.destino)) errores.destino = 'Ingresa un destino válido'
  if (!servicio.fecha || Number.isNaN(Date.parse(servicio.fecha))) errores.fecha = 'Ingresa una fecha válida'
  if (!Number.isInteger(servicio.precio) || servicio.precio < 1) errores.precio = 'Ingresa un precio entero mayor que cero'

  return errores
}
