import { Navbar } from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}
