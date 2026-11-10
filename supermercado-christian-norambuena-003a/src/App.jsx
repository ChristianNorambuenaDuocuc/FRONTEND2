
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada'
import AgregarProducto from './pages/AgregarProducto'
import Inventario from './pages/Inventario'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  )
}

export default App
