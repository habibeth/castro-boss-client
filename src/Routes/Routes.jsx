import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ModifyItem from "../Pages/Dashboard/ModifyItem/ModifyItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "/shop/:category",
                element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            //admin portion
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "addItems",
                element: <AddItem></AddItem>
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>
            },
            {
                path: "updateItem/:id",
                element: <ModifyItem></ModifyItem>,
                loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            },

            //user portion
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: <MyCart></MyCart>
            }
        ]
    }
])