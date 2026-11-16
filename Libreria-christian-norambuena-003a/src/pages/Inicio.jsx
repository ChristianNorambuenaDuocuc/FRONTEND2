import { Link } from 'react-router'
import TarjetaLibreria from '../components/TarjetaLibreria'

const tarjetas = [
  {
    id: 1,
    titulo: 'Historias para todos',
    descripcion: 'Encuentra novelas, fantasía, literatura infantil, historia y muchos otros géneros.',
    imagen: '/imagenes/libros-historias.svg',
    alt: 'Ilustración de libros de distintos géneros',
  },
  {
    id: 2,
    titulo: 'Catálogo organizado',
    descripcion: 'Explora los libros disponibles y descubre sus autores, géneros y existencias.',
    imagen: '/imagenes/libros-catalogo.svg',
    alt: 'Ilustración de una estantería con libros',
  },
  {
    id: 3,
    titulo: 'El placer de leer',
    descripcion: 'Queremos acompañarte en cada nueva aventura, aprendizaje y momento de lectura.',
    imagen: '/imagenes/libros-lectura.svg',
    alt: 'Ilustración de un libro abierto',
  },
]

function Inicio() {
  return (
    <>
      {/* Presentación principal */}
      <section className="bg-linear-to-br from-forest to-forest-soft py-18 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Un mundo entre páginas
          </p>
          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Bienvenidos a Librería Central
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Descubre libros, conoce nuevos autores y encuentra tu próxima historia favorita.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explorar catálogo
          </Link>
        </div>
      </section>

      {/* Información de la librería */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mb-5 text-center text-3xl font-bold text-forest">
          Nuestra librería
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-slate-600">
          En Librería Central nos apasionan los libros. Nuestro catálogo reúne distintos
          géneros y permite consultar la disponibilidad de cada título para que elegir
          tu próxima lectura sea más fácil.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tarjetas.map((tarjeta) => (
            <TarjetaLibreria
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
          ¿Buscas una lectura especial?
        </h2>
        <p className="mb-6 text-slate-600">Contáctanos si tienes consultas sobre nuestra librería.</p>
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
