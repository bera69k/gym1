import { Outlet } from "react-router"
import NavBar from "../components/Navbar/NavBar"
import { Toaster } from "react-hot-toast"

const Root = () => {

  return (
    <>

    <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
        <main>
        <NavBar />
            <Outlet/>
        </main>
    </>
  )
}

export default Root