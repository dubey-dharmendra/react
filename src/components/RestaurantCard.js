import { REST_LOGO } from "../utils/constants"

const RestaurantCard = ({
 cloudinaryImageId,
 name,
 cuisines,
 avgRating }) => {
 return (
  <div className="res-card">
   <img className="res-logo" src={REST_LOGO + cloudinaryImageId}></img>
   <h2>{name}</h2>
   <h4>{cuisines}</h4>
   <h4>{avgRating} rating</h4>
  </div>
 )
}

export default RestaurantCard