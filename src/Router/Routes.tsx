import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AccountDetails from "../Pages/AccountsDetails/AccountDetails";
import CardsDetails from "../Pages/CardsDetails/CardsDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/HomePage/Home/Home";
import LoanDetails from "../Pages/LoanDetails/LoanDetails";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Login/Register";
import Login from "../Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Accounts from "../Pages/Dashboard/userRoutes/Accounts";
import AccountsReg from "../Pages/AccountsReg/AccountsReg";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://bravo-bank-server.vercel.app/accountsTypes"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/openAcc",
        element: <AccountsReg />,
      },
      {
        path: "/accountDetail/:accountType",
        element: <AccountDetails />,
      },
      {
        path: "/cardDetail/:cardType",
        element: <CardsDetails />,
      },
      {
        path: "/loanDetail/:loanType",
        element: <LoanDetails />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Accounts />
      },
      {
        path: '/dashboard/acc',
        element: <Accounts />
      },
    ]
  },

]);
