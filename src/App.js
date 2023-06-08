import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";  // createBrowserRouter is decided to go for certain path
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
        children: [
          {
            path: "profile",  // when giving /profile react dom consider it as localhost:1234/profile
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu/>
      }
    ]
  },
  
])

root.render(<RouterProvider router={appRouter} />);
