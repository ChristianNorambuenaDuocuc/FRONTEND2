import { Outlet } from 'react-router'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-sand text-forest">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
