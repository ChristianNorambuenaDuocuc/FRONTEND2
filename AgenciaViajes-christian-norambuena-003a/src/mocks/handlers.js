import { http, HttpResponse, delay } from 'msw'
import { graphql } from 'msw/graphql'
import { destinos } from '../data/destinos'
import { serviciosIniciales } from '../data/servicios'

const categorias = [
  { id: 1, nombre: 'Vuelo' },
  { id: 2, nombre: 'Hotel' }
]

const apiGraphql = graphql.link('/graphql')

export const handlers = [
  http.get('/api/categorias', async () => {
    await delay(2000)
    return HttpResponse.json(categorias)
  }),

  http.get('/api/destinos', async () => {
    await delay(2000)
    return HttpResponse.json(destinos)
  }),

  apiGraphql.query('ObtenerServicios', async ({ variables }) => {
    await delay(2000)

    const servicios = serviciosIniciales.filter(
      servicio => servicio.destinoId === variables.destinoId
    )

    return HttpResponse.json({
      data: {
        servicios: servicios
      }
    })
  })
]

