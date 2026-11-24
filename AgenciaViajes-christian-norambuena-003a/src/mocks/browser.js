import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.js'

console.log('Handlers registrados:', handlers)

export const worker = setupWorker(...handlers)