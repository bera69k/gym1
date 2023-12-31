import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Location from "./pages/Location";
import Error from "./pages/Error";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from 'axios'
import Profile from "./pages/Profile";
import ClassDescription from "./pages/ClassDescription";


// import ProtectedProfileRoute from "./pages/ProtectedProfileRoute";



const router = createBrowserRouter([
  {path:'/', element:<Root/>, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'about/location', element:<Location/>},
    {path:'classes', element:<Classes/>,},
    {path:'classes/:id', element:<ClassDescription />},
    {path:'gallery', element:<Gallery/>},
    {path:'pricing', element:<Pricing/>},
    {path:'login' ,element:<LoginPage/>},
    {path:'register' ,element:<RegisterPage/>},
    { path: `profile/:username`,element:<Profile />}

  ]},
  {path:'*', element:<Error/>}
])

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
     <RouterProvider router={router}/>  
  );
}

export default App;
