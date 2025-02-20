import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import {
  HiChevronDown,
  HiChevronUp,
  HiMenu,
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineX,
  HiLogout,
  HiLogin,
  HiChatAlt,
  HiOutlineClipboardList,
  HiUser,
} from "react-icons/hi";
import { NavLink, useNavigation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../../Pages/Spinner/Spinner";

const SideMenu = () => {

  const navigation = useNavigation();

  const { user, logOut } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [cardTypes, setCardTypes] = useState([]);
  const [loans, setLoans] = useState([]);


  const {
    isLoading,
    refetch,
    data: types = [],
  } = useQuery({
    queryKey: ["/accountsTypes"],
    queryFn: async () => {
      const res = await fetch(
        "https://bravo-bank-server.vercel.app/accountsTypes"
      );
      const data = await res.json();
      return data;
    },
  });
  useEffect(() => {
    fetch("https://bravo-bank-server.vercel.app/cardsTypes")
      .then((res) => res.json())
      .then((data) => setCardTypes(data));
  }, []);
  useEffect(() => {
    fetch("https://bravo-bank-server.vercel.app/loansTypes")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);
  const handleLogOut = () => {
    logOut(user?.email);
  };

  if (isLoading) {
    <Spinner />;
  }

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <aside className="z-40">
      <div onClick={() => setOpen(!open)} className="fixed z-50 lg:hidden">
        {open ? (
          <div className="fixed right-0 top-0 mr-4 mt-2 p-[3px] rounded-md bg-gradient-to-r from-sky-500 to-pink-500 hover:scale-125 duration-700">
            <HiOutlineX className="text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary" />
          </div>
        ) : (
          <div className="fixed left-0 top-0 ml-4 mt-2 p-[3px] rounded-md bg-gradient-to-r from-pink-500 to-sky-500 duration-700">
            <HiMenu className="text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary" />
          </div>
        )}
      </div>
      <div
        className={`fixed top-0 bg-gray-100 lg:w-[25%] lg:block py-8 rounded-sm z-40 overflow-y-scroll ${open
          ? "block -mt-2 fixed w-full h-full duration-700 overflow-y-scroll"
          : "left-0 bottom-0 top-0 hidden z-40"
          }`}
      >
        <div className="flex flex-col px-3 text-primary">
          <div className="space-y-3">
            <h2 className="font-extrabold text-4xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500">
              Bravo Bank
            </h2>
            <hr className="w-full border border-sky-500" />
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm pr-4">
                <li onClick={() => setOpen(!open)} className="rounded-lg font-semibold text-primary px-4 w-full duration-700">
                  <NavLink
                    to="/"
                    className="flex items-center hover:bg-primary hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                  >
                    <HiOutlineHome />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li
                  className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}
                >
                  <button
                    onClick={() => setAccOpen(!accOpen)}
                    className="flex items-center hover:bg-primary hover:text-white hover:scale-105 duration-500  justify-between p-2 space-x-3  w-full rounded-md"
                  >
                    <div className="flex items-center">
                      <HiOutlineUserAdd className="mr-2" />
                      <span>Accounts</span>
                    </div>
                    {accOpen ? (
                      <HiChevronUp className="text-xl" />
                    ) : (
                      <HiChevronDown className="text-xl" />
                    )}
                  </button>
                  {accOpen && (
                    <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-100 w-full text-primary">
                      {types?.map(
                        (type: {
                          _id: React.Key | null | undefined;
                          accountType: any;
                          name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                          | React.ReactFragment
                          | React.ReactPortal
                          | ((props: {
                            isActive: boolean;
                            isPending: boolean;
                          }) => React.ReactNode)
                          | null
                          | undefined;
                        }) => (
                          <li
                            onClick={() => setOpen(!open)}
                            key={type._id}
                            className="group-hover:scale-100 hover:!scale-105 hover:shadow-sm hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary hover:bg-primary hover:text-white  duration-700"
                          >
                            <NavLink
                              to={`/accountDetail/${type.accountType}`}
                              className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                            >
                              {type?.name}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
                <li
                  className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}
                >
                  <button
                    onClick={() => setCardOpen(!cardOpen)}
                    className="flex items-center hover:bg-primary hover:text-white hover:scale-105 duration-500  justify-between p-2 space-x-3 rounded-md w-full"
                  >
                    <div className="flex items-center">
                      <HiOutlineCreditCard className="mr-2" />
                      <span>Cards</span>
                    </div>
                    {cardOpen ? (
                      <HiChevronUp className="text-xl" />
                    ) : (
                      <HiChevronDown className="text-xl" />
                    )}
                  </button>
                  {cardOpen && (
                    <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-50 w-full text-primary">
                      {cardTypes.map(
                        (
                          card: {
                            _id: React.Key | null | undefined;
                            cardType: any;
                            name: string;
                          },
                          i
                        ) => (
                          <li
                            onClick={() => setOpen(!open)}
                            key={i}
                            className="group-hover:scale-90 hover:!scale-105 hover:shadow-sm hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary hover:bg-primary hover:text-white  w-full  duration-700"
                          >
                            <NavLink
                              to={`/cardDetail/${card?.cardType}`}
                              className="space-x-3 block hover:ml-2 duration-300 rounded-md w-full py-2"
                            >
                              {card?.name}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
                <li
                  className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}
                >
                  <button
                    onClick={() => setLoanOpen(!loanOpen)}
                    className="flex items-center hover:bg-primary hover:text-white hover:scale-105 duration-500  justify-between p-2 space-x-3 rounded-md w-full"
                  >
                    <div className="flex items-center">
                      <FaHandHoldingUsd className="text-xl pr-2" />
                      <span>Loans</span>

                    </div>
                    {loanOpen ? (
                      <HiChevronUp className="text-xl" />
                    ) : (
                      <HiChevronDown className="text-xl" />
                    )}
                  </button>
                  {loanOpen && (
                    <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-50 w-full text-primary">
                      {loans?.map(
                        (loan: {
                          _id: React.Key | null | undefined;
                          loanType: any;
                          name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                          | React.ReactFragment
                          | React.ReactPortal
                          | ((props: {
                            isActive: boolean;
                            isPending: boolean;
                          }) => React.ReactNode)
                          | null
                          | undefined;
                        }) => (
                          <li
                            onClick={() => setOpen(!open)}
                            key={loan._id}
                            className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary hover:bg-primary hover:text-white  w-full  duration-700"
                          >
                            <NavLink
                              to={`/loanDetail/${loan.loanType}`}
                              className="space-x-3 block w-full py-2 hover:ml-2 duration-300 rounded-md"
                            >
                              {loan.name}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
                <li onClick={() => setOpen(!open)} className="rounded-lg font-semibold text-primary px-4 w-full duration-700">
                  <NavLink
                    to="/contactUs"
                    className="flex items-center hover:bg-primary hover:text-white hover:scale-105 duration-500  p-2 space-x-3 rounded-md"
                  >
                    <HiChatAlt />
                    <span>Contact Us</span>
                  </NavLink>
                </li>
                <li onClick={() => setOpen(!open)} className="rounded-lg font-semibold text-primary px-4 w-full duration-700">
                  <NavLink
                    to="/dashboard"
                    className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500  p-2 space-x-3 rounded-md"
                  >
                    <HiOutlineClipboardList />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                {
                  user ?
                    <li
                      onClick={() => setOpen(!open)}
                      className="rounded-lg font-semibold text-pink-500 px-4 w-full duration-700">
                      <button
                        onClick={handleLogOut}
                        className="flex w-full items-center hover:bg-pink-500 hover:text-white hover:scale-105 duration-500  p-2 space-x-3 rounded-md"
                      >
                        <HiLogout />
                        <span>Log Out</span>
                      </button>
                    </li>
                    :
                    <li onClick={() => setOpen(!open)} className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                      <NavLink
                        to="/logIn"
                        className="flex items-center hover:bg-sky-500 hover:text-white hover:scale-105 duration-500  p-2 space-x-3 rounded-md"
                      >
                        <HiLogin />
                        <span>Login</span>
                      </NavLink>
                    </li>
                }
                {
                  user &&
                  <li onClick={() => setOpen(!open)} className="sticky bg-gray-200 bottom-0 left-0 font-semibold text-sky-500 px-4 w-full border-t-2 border-sky-500 duration-700">
                    <NavLink
                      to="/userProfile"
                      className="flex items-center justify-between hover:bg-sky-500 hover:text-white hover:scale-105 duration-500  p-2 space-x-3 rounded-md"
                    >
                      {
                        user?.photoURL ?
                          <div className="bg-gradient-to-r from-pink-500 to-sky-500 rounded-full p-[3px] border-t border-primary group">
                            <img src={user?.photoURL} alt="me"
                              className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                            />
                          </div>
                          :
                          <div className="bg-gradient-to-r from-pink-500 to-sky-500 rounded-full p-[3px]">
                            <HiUser className="text-3xl rounded-full bg-gray-900" />
                          </div>
                      }
                      <p>
                        {user?.displayName}
                      </p>
                    </NavLink>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;