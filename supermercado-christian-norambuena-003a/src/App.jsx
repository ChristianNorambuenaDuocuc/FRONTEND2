import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada'
import Layout from './components/Layout'

function App() {


  return (
    
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="*" element={<PaginaNoEncontrada />} />
          </Route>
        </Routes>
  )
}

export default App
