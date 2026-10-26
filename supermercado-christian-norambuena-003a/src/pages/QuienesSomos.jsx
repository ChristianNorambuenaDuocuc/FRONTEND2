import { Link } from 'react-router'

function QuienesSomos() {
  return (
  <div className="pagina-nosotros">
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold">Quiénes somos</h1>
            <p className="lead text-secondary">
            Supermercado Central es un supermercado ficticio
            dedicado a ofrecer productos de calidad para
            satisfacer las necesidades de nuestros clientes.
            Contamos con un sistema de gestión de inventario
            que permite organizar y controlar nuestros productos.
          </p>
          </div>
          <div className="col-lg-6">
            
<div className="bg-success bg-opacity-10 rounded-3 shadow-sm p-5 text-center">

  <h2 className="h4 fw-bold">
    Nuestro compromiso
  </h2>

  <p className="text-secondary">
    En Supermercado Central trabajamos para ofrecer
    productos de calidad y mantener una gestión
    eficiente de nuestro inventario.
  </p>

  <p className="fw-semibold mb-0">
    Calidad, confianza y buen servicio.
  </p>

</div>

          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="h4 fw-bold">Nuestro propósito</h2>
        <p className="text-secondary">
          Nuestro propósito es ofrecer una experiencia de
          compra cómoda, rápida y confiable, manteniendo
          un inventario organizado que permita asegurar
          la disponibilidad de nuestros productos.
        </p>
      </section>

      <section className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h2 className="h5 fw-bold text-primary">Misión</h2>
                <p className="text-secondary mb-0">
                Ofrecer productos de calidad a precios accesibles,
                garantizando una atención eficiente y una adecuada
                gestión del inventario.
              </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h2 className="h5 fw-bold text-primary">Visión</h2>
                <p className="text-secondary mb-0">
                  Ser un supermercado reconocido por la calidad
                  de sus productos, la satisfacción de sus clientes
                  y la eficiencia de sus procesos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="h4 fw-bold">Nuestros valores</h2>
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="h6 fw-bold text-primary mb-2">Calidad</h3>
                <p className="small text-secondary mb-0">
                Ofrecemos productos que cumplen con nuestros
                estándares de calidad.
              </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="h6 fw-bold text-primary mb-2">Compromiso</h3>
                <p className="small text-secondary mb-0">
                Trabajamos para satisfacer las necesidades
                de nuestros clientes.
              </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="h6 fw-bold text-primary mb-2">Confianza</h3>
                <p className="small text-secondary mb-0">
                Buscamos entregar una experiencia de compra
                segura y confiable.
              </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h3 className="h6 fw-bold text-primary mb-2">Organización</h3>
                <p className="small text-secondary mb-0">
                Mantenemos un control eficiente de nuestro
                inventario y nuestros productos.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <Link to="/contactanos" className="btn btn-primary">
          Contáctanos
        </Link>
      </section>
      </div>
)
  
}

export default QuienesSomos