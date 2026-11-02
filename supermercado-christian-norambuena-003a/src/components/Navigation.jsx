import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const enlaces = [
  { to: '/', etiqueta: 'Inicio', end: true },
  { to: '/quienes-somos', etiqueta: 'Quiénes somos' },
  { to: '/contactanos', etiqueta: 'Contáctanos' },
]

function Navigation() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="border-b border-stone-200 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="text-lg font-bold text-forest transition-colors hover:text-central focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-central"
          onClick={() => setMenuAbierto(false)}
        >
          Supermercado Central
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-stone-300 p-2 text-forest transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-central md:hidden"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuAbierto ? (
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegación principal"
          className={`${menuAbierto ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-stone-100 pt-3 md:flex md:w-auto md:flex-row md:items-center md:gap-2 md:border-0 md:pt-0`}
        >
          {enlaces.map(({ to, etiqueta, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuAbierto(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-central ${
                  isActive
                    ? 'bg-central/10 text-central'
                    : 'text-forest hover:bg-stone-100 hover:text-central'
                }`
              }
            >
              {etiqueta}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation
