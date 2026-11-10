
# 🛒 Supermercado Central

## Descripción del proyecto

Supermercado Central es una aplicación web desarrollada con React y JavaScript que simula el sitio web de un supermercado.

El proyecto permite navegar entre diferentes secciones, registrar nuevos productos y consultar los artículos incorporados al inventario.

La aplicación utiliza componentes reutilizables, Context API y hooks de React para organizar el código y gestionar la información.

## Tecnologías utilizadas

- React
- JavaScript
- React Router
- Context API
- React Hooks (useState y useContext)
- Tailwind CSS
- HTML5 y CSS3

## Funcionalidades disponibles

### Página de inicio
- Presentación del supermercado.
- Información sobre los productos y servicios.
- Navegación hacia otras secciones.

### Quiénes somos
- Información sobre el supermercado.
- Misión, visión y valores.

### Contáctanos
- Información de contacto.
- Ubicación y horarios de atención.

### Agregar producto
- Formulario para registrar productos.
- Campos de nombre, marca y tipo.
- Validación de campos obligatorios.
- Validación mediante expresiones regulares.
- Mensajes específicos para cada campo incorrecto.
- Confirmación cuando el producto se registra correctamente.

### Inventario
- Visualización de los productos registrados.
- Listado organizado por nombre, marca y tipo.
- Mensaje cuando no existen productos registrados.

### Navegación
- Navegación mediante React Router.
- Menú adaptable a diferentes pantallas.
- Página 404 para rutas inexistentes.

## Mejoras implementadas

### 1. Validaciones reutilizables

Se creó el módulo `validarProducto.js`, que utiliza expresiones regulares para validar los campos del formulario.

Las validaciones permiten letras con tildes, espacios, números y determinados caracteres especiales.

También se diferencian los errores por campos vacíos de aquellos que contienen caracteres no permitidos.

### 2. Hook personalizado useInventario

Se creó el hook `useInventario` para centralizar el acceso al contexto del inventario.

Este hook utiliza `useContext` y verifica que los componentes se encuentren dentro de `InventarioProvider`.

### 3. Componentes reutilizables

Se crearon los componentes:

- `CampoFormulario.jsx`: reutiliza la estructura de los campos y sus mensajes de error.
- `BotonPrimario.jsx`: centraliza los estilos de un botón reutilizable.

Esto permite aplicar el principio DRY (Don't Repeat Yourself), evitando duplicar código.

### 4. Mejoras de accesibilidad

Se incorporaron atributos de accesibilidad en los campos del formulario:

- `aria-invalid`: indica si un campo contiene errores.
- `aria-describedby`: relaciona el campo con su mensaje de error.
- `role="status"`: comunica el registro exitoso de un producto.

Los mensajes de error se muestran en rojo debajo del campo correspondiente.

### 5. Generación de identificadores

Se creó la función `generarId()` para asignar identificadores a los nuevos productos.

La función utiliza `crypto.randomUUID()` cuando está disponible.

Cuando no existe esa API, utiliza un mecanismo alternativo basado en la fecha y un valor aleatorio para reducir el riesgo de identificadores repetidos.

### 6. Actualización de documentación

Se actualizó el README para reflejar las funcionalidades disponibles y las mejoras implementadas.

## Estructura del proyecto

```text
src/
├── components/
│   ├── BotonPrimario.jsx
│   ├── CampoFormulario.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navigation.jsx
│   ├── TarjetaInformativa.jsx
│   └── TarjetaSupermercado.jsx
│
├── context/
│   ├── InventarioContext.js
│   └── InventarioProvider.jsx
│
├── hooks/
│   └── useInventario.js
│
├── pages/
│   ├── AgregarProducto.jsx
│   ├── Contactanos.jsx
│   ├── Inicio.jsx
│   ├── Inventario.jsx
│   ├── PaginaNoEncontrada.jsx
│   └── QuienesSomos.jsx
│
├── utils/
│   ├── generarId.js
│   └── validarProducto.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## Instalación y ejecución

### Requisitos previos

- Node.js
- npm

### Pasos

1. Abrir el proyecto en Visual Studio Code.
2. Abrir una terminal en la carpeta principal.
3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección indicada por la terminal.

## Gestión del inventario

La aplicación utiliza Context API para compartir el estado entre los componentes.

El estado de los productos se administra mediante `useState` dentro de `InventarioProvider`.

El formulario `AgregarProducto` permite incorporar artículos y la página `Inventario` permite visualizar los productos registrados.

Actualmente, los productos se mantienen en memoria durante la ejecución y se pierden al recargar la página.

## Objetivo académico

Este proyecto permite aplicar conocimientos de:

- Desarrollo de interfaces con React.
- Componentes funcionales y props.
- Manejo de estados con hooks.
- Context API y hooks personalizados.
- Formularios y validaciones.
- Expresiones regulares.
- Reutilización de componentes.
- Principio DRY.
- Accesibilidad web.
- Navegación mediante React Router.
- Organización y documentación del código.

## Conclusión

Supermercado Central integra las funcionalidades de navegación, registro de productos y consulta de inventario.

Las mejoras realizadas permiten mantener un código más organizado, reutilizable y fácil de mantener, aplicando buenas prácticas de desarrollo con React.


## Nuevas funcionalidades - Actividad Formativa 3

### Filtrado de inventario
Los usuarios pueden filtrar los productos según su
categoría mediante un selector dinámico, sin modificar
los datos originales del inventario.

### Detalle de productos
Cada producto cuenta con una pantalla de detalle donde
se muestra su nombre, marca, categoría y stock disponible.

### Carrito de compras
Los usuarios pueden agregar productos al carrito,
aumentar o disminuir las cantidades seleccionadas
y consultar los artículos agregados.

### Actualización de inventario
Al agregar un producto al carrito, el stock disponible
disminuye automáticamente.

Al disminuir la cantidad del carrito, las unidades
se devuelven al inventario.

El sistema impide agregar productos sin stock disponible.

### Tecnologías
Se continúa utilizando React, Context API,
React Router y Tailwind CSS.
