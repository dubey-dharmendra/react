import { Logo_LINK } from "../utils/constants"

const Header = () => {
 return (
  <div className="header">
   <div className="Logo">
    <img className="logo-img" src={Logo_LINK}></img>
   </div>
   <div className="nav-item">
    <ul>
     <li>Home </li>
     <li>Home </li>
     <li>Home </li>
     <li>Home </li>
    </ul>
   </div>
  </div >
 )
}

export default Header