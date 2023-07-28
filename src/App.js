import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact";
import Profile from "./components/Profile"
import ProfileClass from "./components/ProfileClassComponent"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/ShimmerUi";

// upon on demand loading->upon render -> Suspend loading 
const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div >
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about", element: <About />, children: [{    //nested routing
          path: "profile",
          element: <Profile name="swagger" />
        }]
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      { path: "/instamart", element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense> }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
root.render(<RouterProvider router={appRouter} />);
