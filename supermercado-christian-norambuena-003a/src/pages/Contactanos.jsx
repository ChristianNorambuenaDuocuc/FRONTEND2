function Contactanos() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="mb-5 text-center text-4xl font-bold text-forest">Contáctanos</h1>
      <p className="mx-auto max-w-2xl text-center leading-7 text-slate-600">
        En Supermercado Central estamos disponibles para responder tus consultas y sugerencias.
      </p>
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-5 text-2xl font-semibold text-forest">Información de contacto</h2>
        <div className="space-y-3 text-slate-700">
          <p><span className="font-semibold">Correo:</span> contacto@ejemplo.com</p>
          <p><span className="font-semibold">Teléfono:</span> +56 9 XXXX XXXX</p>
          <p><span className="font-semibold">Ubicación:</span> Santiago, Chile</p>
          <p><span className="font-semibold">Horario:</span> Lunes a sábado de 9:00 a 20:00</p>
        </div>
      </div>
    </section>
  )
}

export default Contactanos
