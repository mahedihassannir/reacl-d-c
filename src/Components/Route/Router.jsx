import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../LoginSystem/Login";
import Register from "../LoginSystem/Register";
import Checkout from "../Pages/Checkout";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "About",
                element: <About></About>
            },

            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Register",
                element: <Register></Register>
            },
            {
                path: "user/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            },


        ]
    }
])

export default router