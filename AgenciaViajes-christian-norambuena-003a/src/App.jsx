
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada'
import AgregarServicio from './pages/AgregarServicio'
import Inventario from './pages/Inventario'
import DetalleServicio from './pages/DetalleServicio'
import Reservas from './pages/Reservas'
import Destinos from './pages/Destinos'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/agregar-servicio" element={<AgregarServicio />} />
        <Route path="/catalogo" element={<Inventario />} />
        <Route path="/servicio/:id" element={<DetalleServicio />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/destinos" element={<Destinos />} />
      </Route>
    </Routes>
  )
}

export default App
