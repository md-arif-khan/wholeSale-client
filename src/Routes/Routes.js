import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Advertised from "../pages/Home/Advertised/Advertised";
import Home from "../pages/Home/Home/Home";
import Phones from "../pages/Home/Phones/Phones";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/advertise',
                element:<Advertised></Advertised>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/phones/:brand',
                loader:({params})=>fetch(`http://localhost:5000/allbrand/${params.brand}`),
                element:<PrivateRoute><Phones></Phones></PrivateRoute>
               
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            
        ]
    }
])

export default router;