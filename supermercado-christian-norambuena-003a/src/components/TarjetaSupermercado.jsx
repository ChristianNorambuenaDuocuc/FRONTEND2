function TarjetaSupermercado({ titulo, descripcion, imagen, alt }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e6e1] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1">
      <img
        src={imagen}
        alt={alt}
        className="h-[210px] w-full shrink-0 object-cover"
      />
      <div className="flex flex-1 flex-col items-center p-6 text-center">
        <h3 className="mb-3 text-xl font-bold text-forest-soft">{titulo}</h3>
        <p className="text-slate-600">{descripcion}</p>
      </div>
    </article>
  )
}

export default TarjetaSupermercado
