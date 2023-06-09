import { Logo_LINK } from "../utils/constants"
import { Link } from "react-router-dom"
import foodLogo from "../assets/Img/foodLogo.png"

const Header = () => {
 return (
  <div className="header">
   <div className="Logo">
    <img className="logo-img" src={foodLogo}></img>
   </div>
   <div className="nav-item">
    <ul>
     <li><Link to="/">Home </Link></li>
     <li><Link to="/about">About </Link></li>
     <li><Link to="/contact">Contact </Link></li>
     <li><Link to="/cart">Cart </Link></li>
    </ul>
   </div>
  </div >
 )
}

export default Header