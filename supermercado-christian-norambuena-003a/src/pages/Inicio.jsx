
import { Link } from "react-router"

function Inicio() {
  return (
    <>
      {/* Presentación principal */}
      <section className="hero-supermercado py-5">
        <div className="container text-center py-5">

          <h1 className="display-4 fw-bold mb-3">
            Bienvenidos a Supermercado Central
          </h1>

          <p className="lead mb-4">
            Calidad, variedad y buenos precios
            para toda la familia.
          </p>

          <Link
            to="/quienes-somos"
            className="btn btn-dorado btn-lg"
          >
            Conoce nuestro supermercado
          </Link>

        </div>
      </section>

      {/* Información del supermercado */}
      <section className="container py-5">

        <h2 className="text-center fw-bold mb-4">
          Nuestro supermercado
        </h2>

        <p className="text-center text-secondary mb-5">
          En Supermercado Central nos preocupamos
          de ofrecer productos de calidad y una
          excelente experiencia de compra.
          Nuestro sistema de gestión de inventario
          nos ayuda a organizar los productos
          y controlar su disponibilidad.
        </p>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 tarjeta-supermercado">
              <img
                src="/imagenes/super1.png"
                className="card-img-top imagen-tarjeta"
                alt="Variedad de productos del supermercado"
              />

              <div className="card-body text-center p-4">
                <h3 className="h5 titulo-tarjeta">
                  Variedad de productos
                </h3>
                <p className="text-secondary">
                  Contamos con alimentos, bebidas,
                  productos de limpieza y artículos
                  para el hogar.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 tarjeta-supermercado">
              <img
                src="/imagenes/super2.png"
                className="card-img-top imagen-tarjeta"
                alt="Estanterías con productos organizados"
              />

              <div className="card-body text-center p-4">
                <h3 className="h5 titulo-tarjeta">
                  Inventario organizado
                </h3>
                <p className="text-secondary">
                  Promovemos un control eficiente
                  de las existencias y la
                  disponibilidad de productos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 tarjeta-supermercado">
            <img
              src="/imagenes/super3.png"
              className="card-img-top imagen-tarjeta"
              alt="Atención al cliente en el supermercado"
            />

              <div className="card-body text-center p-4">
                <h3 className="h5 titulo-tarjeta">
                  Atención al cliente
                </h3>
                <p className="text-secondary">
                  Nuestro compromiso es entregar
                  un servicio cercano, confiable
                  y de calidad.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contacto */}
      <section className="container text-center py-5">

        <h2 className="fw-bold">
          ¿Necesitas comunicarte con nosotros?
        </h2>

        <p className="text-secondary">
          Estamos disponibles para responder tus consultas.
        </p>

        <Link
          to="/contactanos"
          className="btn btn-dorado"
        >
          Contáctanos
        </Link>

      </section>
    </>
  )
}

export default Inicio

