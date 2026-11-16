# 📚 Librería Central

## Descripción

Librería Central es una aplicación web académica hecha con **React**, **JavaScript**, **React Router** y **Tailwind CSS**. Se adaptó desde el proyecto original *Supermercado Central*, conservando su estructura y funciones.

Permite registrar libros, ver el catálogo, filtrar por género, consultar el detalle y agregar o quitar ejemplares del carrito. La información se comparte mediante **Context API** y un hook personalizado.

## Funcionalidades

- **Inicio:** presentación de la librería y sus secciones.
- **Quiénes somos:** misión, visión y valores.
- **Contáctanos:** datos de contacto ficticios.
- **Agregar libro:** formulario con título, autor, género y cantidad disponible. Incluye validaciones y mensajes de error.
- **Catálogo:** lista de libros, filtro por género y enlaces a cada detalle.
- **Detalle del libro:** ficha del libro, stock y botón para agregar al carrito.
- **Carrito:** aumentar o disminuir unidades, con actualización del stock.
- **Página 404:** para rutas inexistentes.

## Tecnologías

React · JavaScript · Vite · React Router · Context API · useState · useContext · Tailwind CSS.

## Estructura

```text
LibreriaCentral/
├── public/
│   └── imagenes/
│       ├── libros-historias.svg
│       ├── libros-catalogo.svg
│       └── libros-lectura.svg
├── src/
│   ├── components/
│   │   ├── BotonPrimario.jsx
│   │   ├── CampoFormulario.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── TarjetaInformativa.jsx
│   │   └── TarjetaLibreria.jsx
│   ├── context/
│   │   ├── InventarioContext.js
│   │   └── InventarioProvider.jsx
│   ├── hooks/
│   │   └── useInventario.js
│   ├── pages/
│   │   ├── AgregarProducto.jsx
│   │   ├── Carrito.jsx
│   │   ├── Contactanos.jsx
│   │   ├── DetalleProducto.jsx
│   │   ├── Inicio.jsx
│   │   ├── Inventario.jsx
│   │   ├── PaginaNoEncontrada.jsx
│   │   └── QuienesSomos.jsx
│   ├── utils/
│   │   ├── generarId.js
│   │   └── validarProducto.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

> **Nota:** Los nombres internos `Inventario`, `AgregarProducto` y `validarProducto` se conservan para facilitar la continuidad del proyecto académico; los productos administrados ahora son **libros**.

## Para ejecutar

1. Abre la carpeta `LibreriaCentral` en Visual Studio Code.
2. En la terminal ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre la dirección local que muestra Vite.

## Cómo probar

1. Entra a **Agregar libro** y registra uno, por ejemplo:
   - Título: `El principito`
   - Autor: `Antoine de Saint-Exupéry`
   - Género: `Literatura infantil`
   - Ejemplares: `10`
2. Entra a **Catálogo** y verifica que aparezca el libro.
3. Filtra por género y abre **Ver detalle**.
4. Agrega el libro al carrito: el stock baja en 1.
5. En el **Carrito**, usa `−` para devolver una unidad al catálogo.

## Consideraciones

- Los datos se conservan solo en memoria; al recargar la página, el inventario y el carrito vuelven a estar vacíos, igual que en el proyecto original.
- No se agregaron precios, pagos ni una base de datos porque no formaban parte del proyecto original.
- Las ilustraciones están incluidas dentro de `public/imagenes` y funcionan sin acceso externo.
