import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AccountDetails from "../Pages/AccountsDetails/AccountDetails";
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
                path: '/accountDetail/:accountType',
                element: <AccountDetails />
            }
        ]
    }
])