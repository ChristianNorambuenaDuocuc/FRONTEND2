import { http, HttpResponse, delay } from 'msw'

const categorias = [
  { id: 1, nombre: 'Ficción' },
  { id: 2, nombre: 'Ciencia Ficción' },
  { id: 3, nombre: 'Romance' },
  { id: 4, nombre: 'Historia' }
]

export const handlers = [
  http.get('/api/categorias', async () => {
  await delay(2000)
  return HttpResponse.json(categorias)
}),
]