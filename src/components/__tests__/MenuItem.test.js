import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import { act } from "react-dom/test-utils"
import store from "../../utils/store"
import Header from "../Header"

import { toBeInTheDocument } from "@testing-library/jest-dom"

import { resto_menu_item_list } from "../../mocks/resto_mock_data"

import { fireEvent, render, waitFor, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(() => {
 return Promise.resolve({
  json: () => {
   return Promise.resolve(resto_menu_item_list)
  }
 })
})



it("add in cart on home page", async () => {

 await act(async =>
  render(
   <BrowserRouter>
    <Provider store={store}>
     <Header />
     <RestaurantMenu />
    </Provider>
   </BrowserRouter>
  )
 )



 const cartAddBtn = screen.getAllByTestId("cartBtnId")

 fireEvent.click(cartAddBtn[0]);
 fireEvent.click(cartAddBtn[1]);
 fireEvent.click(cartAddBtn[2]);

 expect(screen.getByTestId("cart").innerHTML).toBe("Cart 3 ")

})
