# ✈️ Explora Travel — Agencia de Viajes

## Descripción del proyecto

Explora Travel es una aplicación web desarrollada con React que permite explorar destinos turísticos y consultar las opciones de vuelos y hoteles disponibles, facilitando la planificación de viajes.

El proyecto integra una API REST mock y una API GraphQL mock mediante Mock Service Worker (MSW), utilizando Apollo Client para gestionar las consultas GraphQL y React Router para la navegación entre páginas.

## Funcionalidades

- Exploración de destinos turísticos.
- Visualización de países, fotografías y actividades populares.
- Consulta de vuelos y hoteles según el destino seleccionado.
- Visualización de precios, fechas y disponibilidad.
- Catálogo de servicios turísticos.
- Filtrado de servicios por categoría.
- Gestión de reservas.
- Formularios con validaciones.
- Manejo de estados de carga y errores.
- Diseño responsivo para diferentes tamaños de pantalla.

## Tecnologías utilizadas

| Tecnología | Propósito |
|---|---|
| HTML5 | Estructura de la interfaz |
| CSS3 | Estilos visuales |
| JavaScript | Lógica de programación |
| React | Desarrollo de componentes |
| Vite | Entorno de desarrollo |
| Tailwind CSS | Diseño responsivo |
| React Router | Navegación entre páginas |
| MSW | Simulación de API REST y GraphQL |
| Apollo Client | Consultas GraphQL y gestión de caché |
| Context API | Manejo de estado global |
| Git y GitHub | Control de versiones |

## Instalación y ejecución

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar las dependencias ejecutando `npm install`.
4. Iniciar el servidor de desarrollo ejecutando `npm run dev`.
5. Abrir la dirección proporcionada por Vite en el navegador.

## Arquitectura del proyecto

- **src/components:** componentes reutilizables de la interfaz.
- **src/pages:** páginas de la aplicación.
- **src/context:** gestión del estado global.
- **src/data:** datos simulados de destinos y servicios.
- **src/mocks:** configuración y definición de las API mock.
- **src/graphql:** configuración de Apollo Client y operaciones GraphQL.
- **public/destinos:** fotografías de los destinos turísticos.

## API REST

La API REST se implementa mediante Mock Service Worker, permitiendo simular peticiones HTTP sin necesidad de disponer de un servidor externo.

Endpoints implementados:

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/destinos | Obtiene los destinos turísticos disponibles |
| GET | /api/categorias | Obtiene las categorías de servicios |

Las consultas REST se realizan mediante Fetch y los datos se gestionan utilizando los hooks useState y useEffect.

## API GraphQL

La API GraphQL permite consultar los vuelos y hoteles asociados a un destino mediante su identificador.

- Endpoint: `/graphql`
- Operación: `ObtenerServicios`
- Variable: `destinoId`

La consulta permite obtener el identificador, nombre, tipo, precio, fecha y disponibilidad de cada servicio.

Se utiliza Apollo Client mediante el hook useQuery, permitiendo gestionar automáticamente los estados de carga, errores y almacenamiento en caché.

## Navegación

La aplicación utiliza React Router para gestionar la navegación entre las siguientes páginas:

- Inicio.
- Quiénes somos.
- Contáctanos.
- Agregar servicio.
- Catálogo.
- Detalle del servicio.
- Destinos.
- Reservas.
- Página no encontrada.

## Manejo de estado

La aplicación utiliza useState, useEffect, Context API, hooks personalizados y Apollo Client para gestionar los datos y actualizar dinámicamente la interfaz.

## Diseño responsivo

La interfaz se desarrolla mediante Tailwind CSS, utilizando cuadrículas adaptables, componentes reutilizables y un menú de navegación responsivo.

## Pruebas de funcionamiento

Se consideran pruebas de navegación, consultas REST y GraphQL, selección de destinos, manejo de estados y visualización responsiva en Google Chrome, Microsoft Edge y Mozilla Firefox.

## Autor

**Christian Norambuena**

- Institución: Duoc UC.
- Asignatura: Frontend II.
- Año: 2026.

Proyecto desarrollado con fines académicos. Los datos de vuelos, hoteles, precios y disponibilidad son simulados.
