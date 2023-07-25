import { Logo_LINK } from "../utils/constants"
import { Link } from "react-router-dom"
import foodLogo from "../assets/Img/foodLogo.png"

const Header = () => {
 return (
  <div className="flex  justify-between bg-cyan-700 text-zinc-950 text-lg">
   <div className="Logo">
    <img className="h-28" src={foodLogo}></img>
   </div>
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