
import { Link } from "react-router"
import TarjetaSupermercado from "../components/TarjetaSupermercado"


const tarjetas = [
  {
    id: 1,
    titulo: "Variedad de productos",
    descripcion: "Contamos con alimentos, bebidas, productos de limpieza y artículos para el hogar.",
    imagen: "/imagenes/super1.png",
    alt: "Variedad de productos del supermercado"
  },
  {
    id: 2,
    titulo: "Inventario organizado",
    descripcion: "Promovemos un control eficiente de las existencias y la disponibilidad de productos.",
    imagen: "/imagenes/super2.png",
    alt: "Inventario organizado en el supermercado"
  },
  {
    id: 3,
    titulo: "Atención al cliente",
    descripcion: "Nuestro compromiso es entregar un servicio cercano, confiable y de calidad.",
    imagen: "/imagenes/super3.png",
    alt: "Atención al cliente en el supermercado"
  }
]




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
          {tarjetas.map((tarjeta) => (
            <TarjetaSupermercado
              key={tarjeta.id}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              imagen={tarjeta.imagen}
              alt={tarjeta.alt}
            />
          ))}
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

