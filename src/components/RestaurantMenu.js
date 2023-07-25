import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { REST_LOGO, Resto_Menu } from "../utils/constants"

const RestaurantManu = () => {
 const [restaurantInfo, setRestaurantInfo] = useState({})
 const { id } = useParams()

 useEffect(() => {
  getRestaurantInfo();
 }, [])

 async function getRestaurantInfo() {
  const url = Resto_Menu + id
  const data = await fetch(url)
  const json = await data.json()
  console.log(json.data);
  setRestaurantInfo(json.data.cards[0].card.card.info)
 }
 return (
  <div>
   <h1>This is Restaurant Page id = {id}</h1>
   <h1>{restaurantInfo.name}</h1>
   <img src={REST_LOGO + restaurantInfo.cloudinaryImageId}></img>
   <h1>{restaurantInfo.areaName}</h1>
   <h1>{restaurantInfo.city}</h1>
   <h1>{restaurantInfo.avgRating}</h1>
   <h1>{restaurantInfo.costForTwo}</h1>
   <h1>{restaurantInfo.cuisines}</h1>
  </div>
 )
}

export default RestaurantManu