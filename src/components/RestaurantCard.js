import UserContext from "../utils/UserContext";
import { REST_LOGO } from "../utils/constants"

import { useContext } from "react"




const RestaurantCard = ({ resData }) => {


 const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info
 const { user } = useContext(UserContext);
 return (
  <div className=" h-72 w-[12rem] p-2 m-2 shadow-sm bg-cyan-300">

   <img className="res-logo" src={REST_LOGO + cloudinaryImageId}></img>
   <h2 className="font-bold">{name}</h2>
   <h4>{cuisines.join(", ")}</h4>
   <h4>{avgRating} rating</h4>
   <h4>User Name {user.name}</h4>
   <h4>email {user.email}</h4>

  </div>
 )
}

export default RestaurantCard