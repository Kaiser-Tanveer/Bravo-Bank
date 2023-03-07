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
import UserProfile from "../Pages/UserProfile/UserProfile";
import AccountsRequest from "../Pages/AllRequests/AccountsRequest/AccountsRequest";
import MyAccounts from "../Pages/UserProfile/MyAccounts/MyAccounts";
import MyCards from "../Pages/UserProfile/MyCards/MyCards";
import MyLoans from "../Pages/UserProfile/MyLoans/MyLoans";

import SingleAccDetails from "../Pages/Dashboard/userRoutes/SingleAccDetails";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Terms from "../Shared/Footer/Terms/Terms";
import Faq from "../Shared/Footer/Faq/Faq";
import CardsRequest from "../Pages/AllRequests/CardsRequest/CardsRequest";
import UserCardRequest from "../Pages/Dashboard/UserCardRequest/UserCardRequest";
import LoanRequest from "../Pages/AllRequests/LoanRequest/LoanRequest";
import MoneyTrans from "../Pages/UserProfile/MoneyTrans/MoneyTrans";
import UserLoanReq from "../Pages/Dashboard/UserLoanReq/UserLoanReq";
import UserLoanDetail from "../Pages/Dashboard/UserLoanReq/UserLoanDetail";
import SecurityInformation from "../Shared/Footer/SecurityInformation/SecurityInformation";
import Accessibility from "../Shared/Footer/Accessibility/Accessibility";
import Privacy from "../Shared/Footer/Privacy/Privacy";
import Careers from "../Shared/Footer/Careers/Careers";
import LegalInformation from "../Shared/Footer/LegalInformation/LegalInformation";
import SingleAccountDetails from "../Pages/UserProfile/SingleaccountDetails/SingleaccountDetails";
import CustomerReviews from "../Shared/Footer/Customerreviews/Customerreviews";
import Aboutus from "../Shared/Footer/Aboutus/Aboutus";

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
        element: <AccountsRequest />,
      },
      {
        path: "/accountDetail/:accountType",
        element: <AccountDetails />,
      },
      {
        path: "/singleDetails/:accountId",
        element: <SingleAccountDetails />,
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
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/myAccounts",
        element: <MyAccounts />,
      },
      {
        path: "/myCards",
        element: <MyCards />,
      },
      {
        path: "/myLoans",
        element: <MyLoans />,
      },

      {
        path: "/singleLoanDetail/:id",
        element: <UserLoanDetail />,
      },
      {
        path: "/loanReq/:id",
        element: <LoanRequest />,
      },

      {
        path: "/cardsReq/:id",
        element: <CardsRequest />,
      },
      {
        path: "/terms&Conditions",
        element: <Terms />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/moneyTrans/:id",
        element: <MoneyTrans />,
      },
      {
        path: "/customerReviews",
        element: <CustomerReviews />,
      },
      {
        path: "/securityInformation",
        element: <SecurityInformation />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
      {
        path: "/legalInformation",
        element: <LegalInformation />,
      },
      {
        path: "/moneyTrans/:id",
        element: <MoneyTrans />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Accounts />,
      },
      {
        path: "/dashboard/singleAccDetails/:id",
        element: <SingleAccDetails />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/cardRequest",
        element: <UserCardRequest />,
      },
      {
        path: "/dashboard/loanRequest",
        element: <UserLoanReq />,
      },
    ],
  },
]);
