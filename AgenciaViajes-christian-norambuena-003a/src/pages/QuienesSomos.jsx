import { Link } from 'react-router'
import TarjetaInformativa from '../components/TarjetaInformativa'

const valores = [
  { id: 1, titulo: 'Pasión por viajar', descripcion: 'Creemos que viajar permite descubrir nuevas culturas.' },
  { id: 2, titulo: 'Diversidad', descripcion: 'Ofrecemos diferentes destinos y opciones de alojamiento.' },
  { id: 3, titulo: 'Confianza', descripcion: 'Buscamos brindar una experiencia cercana, clara y confiable.' },
  { id: 4, titulo: 'Organización', descripcion: 'Mantenemos nuestro catálogo ordenado y actualizado.' },
]

function QuienesSomos() {
  return (
    <div className="bg-sand text-forest">
      <section className="bg-[#e3f1f3] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-bold sm:text-5xl">Quiénes somos</h1>
            <p className="text-lg leading-8 text-slate-600">
              Explora Travel es una agencia ficticia creada como proyecto académico. Ofrecemos un catálogo de vuelos y hoteles con información de disponibilidad.
            </p>
          </div>
          <div className="rounded-2xl bg-[#cce6e9] p-8 text-center shadow-sm sm:p-10">
            <h2 className="mb-4 text-2xl font-bold">Nuestro compromiso</h2>
            <p className="mb-4 text-slate-600">
              Compartimos el gusto por viajar y buscamos que cada visita sea una oportunidad para descubrir nuevos destinos.
            </p>
            <p className="font-semibold">Viajes, experiencias y nuevos destinos.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold">Nuestro propósito</h2>
        <p className="max-w-4xl leading-7 text-slate-600">
          Ofrecer una experiencia simple y agradable para descubrir vuelos y hoteles,
          consultar su información y mantener organizado nuestro inventario.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TarjetaInformativa
            titulo="Misión"
            descripcion="Facilitar la planificación de viajes mediante un catálogo accesible y organizado."
          />
          <TarjetaInformativa
            titulo="Visión"
            descripcion="Ser un punto de encuentro para quienes disfrutan descubrir el mundo."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold">Nuestros valores</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {valores.map((valor) => (
            <article key={valor.id} className="h-full rounded-2xl border border-[#e8e6e1] bg-white p-5 text-center shadow-sm">
              <h3 className="mb-3 font-bold text-forest-soft">{valor.titulo}</h3>
              <p className="text-sm leading-6 text-slate-600">{valor.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Link
          to="/contactanos"
          className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-forest transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-central"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  )
}

export default QuienesSomos
