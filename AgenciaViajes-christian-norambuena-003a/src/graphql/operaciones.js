import { gql } from '@apollo/client'

export const OBTENER_SERVICIOS = gql`
    query ObtenerServicios($destinoId: Int!) {
        servicios(destinoId: $destinoId) {
            id
            nombre
            tipo
            precio
            fecha
            stock
        }
    }
`