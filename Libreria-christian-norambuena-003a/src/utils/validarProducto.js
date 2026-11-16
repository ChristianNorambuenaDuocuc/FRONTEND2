const patronTexto = /^[\p{L}\p{N} .,'&/\-:;¡!¿?()]+$/u

function validarTexto(texto) {
  return patronTexto.test(texto.trim())
}

export function validarProducto(libro) {
  const errores = {}

  if (!libro.titulo.trim()) {
    errores.titulo = 'El título es obligatorio'
  } else if (!validarTexto(libro.titulo)) {
    errores.titulo = 'El título contiene caracteres no permitidos'
  }

  if (!libro.autor.trim()) {
    errores.autor = 'El autor es obligatorio'
  } else if (!validarTexto(libro.autor)) {
    errores.autor = 'El autor contiene caracteres no permitidos'
  }

  if (!libro.genero.trim()) {
    errores.genero = 'El género es obligatorio'
  } else if (!validarTexto(libro.genero)) {
    errores.genero = 'El género contiene caracteres no permitidos'
  }

  if (!Number.isInteger(libro.stock) || libro.stock < 1) {
    errores.stock = 'Ingresa una cantidad entera mayor que cero'
  }

  return errores
}
