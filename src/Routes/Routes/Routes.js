import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login/Login";
import CreateAnAccount from "../../Pages/Login/CreateAnAccount/CreateAnAccount";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/CreateAnAccount',
                element: <CreateAnAccount></CreateAnAccount>
            }

        ]
    }
])