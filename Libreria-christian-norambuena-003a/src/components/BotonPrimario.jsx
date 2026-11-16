function BotonPrimario({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-central px-5 py-3 font-semibold text-white hover:bg-central-dark"
    >
      {children}
    </button>
  )
}

export default BotonPrimario