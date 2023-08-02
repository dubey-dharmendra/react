import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

 const cartItem = useSelector((store) => store.cart.items); { /* now im pointing to --> store ke cart slice ke items ko*/ }
 const dispatch = useDispatch()
 const clearCartItem = () => {
  dispatch(clearCart())
 }

 return (
  <div>\
   <div className="flex justify-around">
    <h1 className="font-bold text-3xl">Carts Items</h1>
    <button className="bg-cyan-400 p-2 m-2 rounded-md" onClick={() => clearCartItem()}>Clear Cart</button>

   </div>

   <div className="flex">
    {cartItem.map((ele) => <FoodItem {...ele} />)}
   </div>
  </div>
 )

}

export default Cart