import React, { Suspense, lazy, useContext, useState } from "react";
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

import UserContext from "./utils/UserContext"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/ShimmerUi";

// upon on demand loading->upon render -> Suspend loading 
const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
  let [newUser, setNewUser] = useState({ name: "dharmendra", email: "dharmendra@tftus.com" });

  const { user } = useContext(UserContext);


  return (
    <UserContext.Provider value={{ user: newUser, setNewUser: setNewUser }}>  {/*over Riding context data*/}
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>

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
