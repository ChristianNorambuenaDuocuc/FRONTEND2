import Navegacion from './components/Navigation'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'

function App() {


  return (
    <>
      <div className="d-flex flex-column min-vh-100">
      <Navegacion />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </main>

      <Footer />
      </div>
    </>
  )
}

export default App
