import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Double from "../Components/Others/Double";
import Family from "../Components/Others/Family";
import Home from "../Components/Others/Home";
import Login from "../Components/Others/Login";
import Register from "../Components/Others/Register";
import Single from "../Components/Others/Single";
import Auth from "../Layouts/Auth";
import Private from "../Layouts/Private";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth><App></App></Auth>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/single',
                element: <Private><Single/></Private>
            },
            {
                path: '/double',
                element: <Private><Double/></Private>
            },
            {
                path: '/family',
                element: <Private><Family/></Private>
            },
        ]
    },
])