import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Advertised from "../pages/Home/Advertised/Advertised";
import Home from "../pages/Home/Home/Home";
import Phones from "../pages/Home/Phones/Phones";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import SellerProduct from "../pages/Dashboard/SellerProduct/SellerProduct";

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
                loader:({params})=>fetch(`https://wholesale-server-site.vercel.app/allbrand/${params.brand}`),
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
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
             },
            {
                path:'/dashboard/myproduct',
                element: <MyProduct></MyProduct>   
             },
             {
                path:'/dashboard/addproduct',
                element: <AddProduct></AddProduct>  
             },
             {
                path:'/dashboard/allsellers',
                element: <AllSellers></AllSellers> 
             },
             {
                path:'/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers> 
             },
             {
                path:'/dashboard/sellerProduct',
                element: <SellerProduct></SellerProduct>
             }
        ]
    }
])

export default router;