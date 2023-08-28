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
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

import UserContext from "./utils/UserContext"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/ShimmerUi";
import Cart from "./components/Cart";

// upon on demand loading->upon render -> Suspend loading 
const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
  let [newUser, setNewUser] = useState({ name: "dharmendra", email: "dharmendra@tftus.com" });

  const { user } = useContext(UserContext);


  return (

    <Provider store={store}>
      <UserContext.Provider value={
        { user: newUser, setNewUser: setNewUser }
      }>  {/*over Riding context data*/}
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
      { path: "/cart", element: <Cart /> },
      { path: "/instamart", element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense> }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
