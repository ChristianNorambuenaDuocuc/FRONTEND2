import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'
import InventarioProvider from './context/InventarioProvider'
import { worker } from './mocks/browser'
import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './graphql/client'

await worker.start()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
    <InventarioProvider>
        <App />
    </InventarioProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)

