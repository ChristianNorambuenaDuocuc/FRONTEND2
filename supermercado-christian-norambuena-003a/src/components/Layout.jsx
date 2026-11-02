
import { Outlet } from "react-router"
import Navegacion from "./Navigation"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navegacion />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
