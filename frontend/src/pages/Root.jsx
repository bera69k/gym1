import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import { Toaster } from "react-hot-toast"

const Root = () => {

  return (
    <>
    <NavBar />
    <Toaster position="top-center" toastOptions={{duration:2000}}/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Root