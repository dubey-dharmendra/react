import { REST_LOGO } from "../utils/constants"

const RestaurantCard = ({ resData }) => {

 const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info
 return (
  <div className=" h-60 w-[12rem] p-2 m-2 shadow-sm bg-cyan-300">

   <img className="res-logo" src={REST_LOGO + cloudinaryImageId}></img>
   <h2 className="font-bold">{name}</h2>
   <h4>{cuisines.join(", ")}</h4>
   <h4>{avgRating} rating</h4>
  </div>
 )
}

export default RestaurantCard