import { Link } from 'react-router'
import TarjetaInformativa from '../components/TarjetaInformativa'

const valores = [
  {
    id: 1,
    titulo: 'Calidad',
    descripcion: 'Ofrecemos productos que cumplen con nuestros estándares de calidad.',
  },
  {
    id: 2,
    titulo: 'Compromiso',
    descripcion: 'Trabajamos para satisfacer las necesidades de nuestros clientes.',
  },
  {
    id: 3,
    titulo: 'Confianza',
    descripcion: 'Buscamos entregar una experiencia de compra segura y confiable.',
  },
  {
    id: 4,
    titulo: 'Organización',
    descripcion: 'Mantenemos un control eficiente de nuestro inventario y nuestros productos.',
  },
]

function QuienesSomos() {
  return (
    <div className="bg-sand text-forest">
      <section className="bg-[#edf2ef] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-bold sm:text-5xl">Quiénes somos</h1>
            <p className="text-lg leading-8 text-slate-600">
              Supermercado Central es un supermercado ficticio dedicado a ofrecer productos
              de calidad para satisfacer las necesidades de nuestros clientes. Contamos con
              un sistema de gestión de inventario que permite organizar y controlar nuestros productos.
            </p>
          </div>
          <div className="rounded-2xl bg-[#e4ebe7] p-8 text-center shadow-sm sm:p-10">
            <h2 className="mb-4 text-2xl font-bold">Nuestro compromiso</h2>
            <p className="mb-4 text-slate-600">
              En Supermercado Central trabajamos para ofrecer productos de calidad y
              mantener una gestión eficiente de nuestro inventario.
            </p>
            <p className="font-semibold">Calidad, confianza y buen servicio.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-3 text-2xl font-bold">Nuestro propósito</h2>
        <p className="max-w-4xl leading-7 text-slate-600">
          Nuestro propósito es ofrecer una experiencia de compra cómoda, rápida y confiable,
          manteniendo un inventario organizado que permita asegurar la disponibilidad de nuestros productos.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TarjetaInformativa
            titulo="Misión"
            descripcion="Ofrecer productos de calidad a precios accesibles, garantizando una atención eficiente y una adecuada gestión del inventario."
          />
          <TarjetaInformativa
            titulo="Visión"
            descripcion="Ser un supermercado reconocido por la calidad de sus productos, la satisfacción de sus clientes y la eficiencia de sus procesos."
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
