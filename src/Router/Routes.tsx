import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Account from "../Pages/Account/Account";
import Home from "../Pages/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                // path: '/account/:accountType',
                path: '/account',
                element: <Account />,
                loader: () => fetch(`Account.json`)
            }
        ]
    }
])