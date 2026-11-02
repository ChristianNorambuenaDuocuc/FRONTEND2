# Supermercado Central — Migración a Tailwind CSS

Proyecto React + Vite + React Router, migrado completamente de Bootstrap a Tailwind CSS v4.

## Antes de iniciar

Las imágenes de `public/imagenes/super1.png`, `super2.png` y `super3.png` deben copiarse desde el proyecto original (no se adjuntaron). No elimines las imágenes de tu repositorio anterior al incorporar esta migración.

## Instalación

```bash
npm install
npm run dev
```

Para revisar el código:

```bash
npm run lint
npm run build
```

Se eliminó Bootstrap y las antiguas clases CSS personalizadas. `src/index.css` importa Tailwind y define únicamente los colores del sitio con `@theme`.

## Estructura

- `src/main.jsx`: inicia la aplicación y `BrowserRouter`.
- `src/App.jsx`: define las rutas.
- `src/components/Layout.jsx`: navegación, `Outlet` y footer.
- `src/components/Navigation.jsx`: navegación con `NavLink` y menú móvil controlado con `useState`.
- `src/components/TarjetaSupermercado.jsx`: tarjeta reutilizable con imagen.
- `src/components/TarjetaInformativa.jsx`: tarjeta reutilizable con texto.
- `src/pages/Inicio.jsx`: página principal, tarjetas definidas en un arreglo y generadas con `map`.
- `src/pages/QuienesSomos.jsx`: propósito, misión, visión y valores generados con `map`.
- `src/pages/Contactanos.jsx`: información de contacto.
- `src/pages/PaginaNoEncontrada.jsx`: ruta 404.

## Qué se mantiene y qué cambia

- Se mantienen textos, rutas, contenido y paleta de colores del sitio original.
- Se preserva la navegación activa con `NavLink` y la adaptación móvil con `useState`.
- Se reemplazan clases Bootstrap (`container`, `row`, `col-md-4`, `btn`, etc.) por utilidades Tailwind (`max-w-6xl`, `grid`, `md:grid-cols-3`, `rounded-lg`, etc.).
- Se conserva la ruta de las imágenes originales.

## Próximo trabajo

La actividad de la segunda semana todavía **no está implementada**: faltará agregar dos páginas (agregar artículo y listar inventario), un formulario y estado global compartido. Se hará después de revisar la migración.
