function TarjetaInformativa({ titulo, descripcion }) {
  return (
    <article className="h-full rounded-2xl border border-[#e8e6e1] bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-bold text-forest-soft">{titulo}</h2>
      <p className="text-slate-600">{descripcion}</p>
    </article>
  )
}

export default TarjetaInformativa
