function BotonPrimario({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
    >
      {children}
    </button>
  )
}

export default BotonPrimario