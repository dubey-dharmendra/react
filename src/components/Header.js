import { Link } from "react-router-dom"
import foodLogo from "../assets/Img/foodLogo.png"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Header = () => {
 const { user, setNewUser } = useContext(UserContext); {/* setNewUser are the state from APP componet user work as context. for chaange the context value dynamically */ }
 return (
  <div className="flex  justify-between bg-cyan-700 text-zinc-950 text-lg">
   <div className="Logo">
    <img className="h-28" src={foodLogo}></img>
   </div>
   <div className="m-2 p-1"><input value={user.name} onChange={(e) => setNewUser({ name: e.target.value, email: "heelo@gmail.com" })} /></div>
   <div className="nav-item ">
    <ul className="flex py-10">
     <li className="px-4"><Link to="/">Home </Link></li>
     <li className="px-4"><Link to="/about">About </Link></li>
     <li className="px-4"><Link to="/contact">Contact </Link></li>
     <li className="px-4"><Link to="/cart">Cart </Link></li>
     <li className="px-4"><Link to="/instamart">Instamart </Link></li>
    </ul>
   </div>
  </div >
 )
}

export default Header