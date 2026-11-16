import { http, HttpResponse } from 'msw'

const categorias = [
  { id: 1, nombre: 'Ficción' },
  { id: 2, nombre: 'Ciencia Ficción' },
  { id: 3, nombre: 'Romance' },
  { id: 4, nombre: 'Historia' }
]

export const handlers = [
  http.get('/api/categorias', () => {
    return HttpResponse.json(categorias)
  })
]