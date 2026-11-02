
function TarjetaInformativa({ titulo, descripcion }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <h2 className="h5 fw-bold text-primary">
            {titulo}
          </h2>

          <p className="text-secondary mb-0">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TarjetaInformativa
