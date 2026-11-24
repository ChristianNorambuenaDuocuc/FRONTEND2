import { Link } from 'react-router'
import TarjetaViaje from '../components/TarjetaViaje'

const tarjetas = [
  { id: 1, titulo: 'Vuelos', descripcion: 'Explora conexiones nacionales e internacionales.', imagen: '/imagenes/vuelos.svg', alt: 'Avión sobre las montañas' },
  { id: 2, titulo: 'Hoteles', descripcion: 'Encuentra alojamiento para tu próximo viaje.', imagen: '/imagenes/hoteles.svg', alt: 'Hotel junto al mar' },
  { id: 3, titulo: 'Nuevos destinos', descripcion: 'Planifica tus vacaciones y administra tus reservas.', imagen: '/imagenes/destinos.svg', alt: 'Paisaje de montaña' },
]

function Inicio() {
  return (
    <>
      {/* Presentación principal */}
      <section className="bg-linear-to-br from-forest to-forest-soft py-18 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Tu próxima aventura
          </p>
          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Bienvenidos a Explora Travel
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Descubre vuelos, hoteles y destinos para tu próxima aventura.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explorar catálogo
          </Link>
        </div>
      </section>

      {/* Información de la agencia */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mb-5 text-center text-3xl font-bold text-forest">
          Nuestra agencia
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-slate-600">
          En Explora Travel reunimos vuelos y alojamientos para que puedas consultar precios y disponibilidad en un solo lugar.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tarjetas.map((tarjeta) => (
            <TarjetaViaje
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
          ¿Buscas un viaje especial?
        </h2>
        <p className="mb-6 text-slate-600">Contáctanos si tienes consultas sobre nuestra agencia.</p>
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
