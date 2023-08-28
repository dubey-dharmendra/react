import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"

test("header logo testing", () => {
 const header = render(
  <StaticRouter>
   <Provider store={store}>
    <Header />
   </Provider>
  </StaticRouter>
 )

 const logo = header.getAllByTestId("logo")

 expect(logo[0].src).toBe("http://localhost/dummyLogo.png")

})


test("cart item should be 0 on rendering header", () => {
 const header = render(
  <StaticRouter>
   <Provider store={store}>
    <Header />
   </Provider>
  </StaticRouter>
 )

 const cartItem = header.getByTestId("cart")
 expect(cartItem.innerHTML).toBe("Cart 0 ")

})