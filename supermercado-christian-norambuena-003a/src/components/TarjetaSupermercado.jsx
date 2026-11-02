
function TarjetaSupermercado({ titulo, descripcion, imagen, alt }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 tarjeta-supermercado">
        <img
          src={imagen}
          className="card-img-top imagen-tarjeta"
          alt={alt}
        />

        <div className="card-body text-center p-4">
          <h3 className="h5 titulo-tarjeta">
            {titulo}
          </h3>

          <p className="text-secondary">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TarjetaSupermercado
