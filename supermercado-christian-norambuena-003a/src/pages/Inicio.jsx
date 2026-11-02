import { Link } from 'react-router'
import TarjetaSupermercado from '../components/TarjetaSupermercado'

const tarjetas = [
  {
    id: 1,
    titulo: 'Variedad de productos',
    descripcion: 'Contamos con alimentos, bebidas, productos de limpieza y artículos para el hogar.',
    imagen: '/imagenes/super1.png',
    alt: 'Variedad de productos del supermercado',
  },
  {
    id: 2,
    titulo: 'Inventario organizado',
    descripcion: 'Promovemos un control eficiente de las existencias y la disponibilidad de productos.',
    imagen: '/imagenes/super2.png',
    alt: 'Estanterías con productos organizados',
  },
  {
    id: 3,
    titulo: 'Atención al cliente',
    descripcion: 'Nuestro compromiso es entregar un servicio cercano, confiable y de calidad.',
    imagen: '/imagenes/super3.png',
    alt: 'Atención al cliente en el supermercado',
  },
]

function Inicio() {
  return (
    <>
      {/* Presentación principal */}
      <section className="bg-linear-to-br from-forest to-forest-soft py-18 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Bienvenidos a Supermercado Central
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Calidad, variedad y buenos precios para toda la familia.
          </p>
          <Link
            to="/quienes-somos"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Conoce nuestro supermercado
          </Link>
        </div>
      </section>

      {/* Información del supermercado */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mb-5 text-center text-3xl font-bold text-forest">
          Nuestro supermercado
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-slate-600">
          En Supermercado Central nos preocupamos de ofrecer productos de calidad y una
          excelente experiencia de compra. Nuestro sistema de gestión de inventario nos
          ayuda a organizar los productos y controlar su disponibilidad.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tarjetas.map((tarjeta) => (
            <TarjetaSupermercado
              key={tarjeta.id}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              imagen={tarjeta.imagen}
              alt={tarjeta.alt}
            />
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-forest sm:text-3xl">
          ¿Necesitas comunicarte con nosotros?
        </h2>
        <p className="mb-6 text-slate-600">Estamos disponibles para responder tus consultas.</p>
        <Link
          to="/contactanos"
          className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-central"
        >
          Contáctanos
        </Link>
      </section>
    </>
  )
}

export default Inicio
