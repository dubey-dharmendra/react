import { Link } from "react-router-dom"
import foodLogo from "../assets/Img/foodLogo.png"
import { useContext } from "react"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

 const cartItem = useSelector(store => store.cart.items)


 const { user, setNewUser } = useContext(UserContext); {/* setNewUser are the state from APP componet user work as context. for chaange the context value dynamically */ }
 return (
  <div className="flex  justify-between bg-cyan-700 text-zinc-950 text-lg">
   <div className="Logo">
    <img data-testid="logo" className="h-28" src={foodLogo}></img>
   </div>
   <div className="m-2 p-1"><input value={user.name} onChange={(e) => setNewUser({ name: e.target.value, email: "heelo@gmail.com" })} /></div>
   <div className="nav-item ">
    <ul className="flex py-8">
     <Link to="/"><li className="px-4">Home </li></Link>
     <Link to="/about"><li className="px-4">About </li></Link>
     <Link to="/contact"><li className="px-4">Contact </li></Link>
     <Link to="/cart"><li className="px-4" data-testid="cart">Cart {cartItem.length} </li></Link>
     <Link to="/instamart"><li className="px-4">Instamart</li> </Link>
    </ul>
   </div>
  </div >
 )
}

export default Header