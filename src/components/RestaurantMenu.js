import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { REST_LOGO, Resto_Menu } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {

 const [restaurantInfo, setRestaurantInfo] = useState({})
 const [restaurantMenu, setRestaurantMenu] = useState([])
 const { id } = useParams()


 const dispatch = useDispatch();

 const addFoodItem = (item) => {
  dispatch(addItem(item))
 }



 useEffect(() => {
  getRestaurantInfo();
 }, [])


 async function getRestaurantInfo() {
  const url = Resto_Menu + id
  const data = await fetch(url)
  const json = await data.json()
  setRestaurantInfo(json.data.cards[0].card.card.info)
  setRestaurantMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
 }
 return (
  <div className="flex">
   <div>
    <h1>This is Restaurant Page id = {id}</h1>

    <img src={REST_LOGO + restaurantInfo.cloudinaryImageId}></img>
    <h1>{restaurantInfo.name}</h1>
    <h1>{restaurantInfo.city}</h1>
    <h1>{restaurantInfo.cuisines}</h1>
   </div>
   <div className="p-2">
    <h1>Menu</h1>
    <ul>
     {restaurantMenu.map((items) => (
      <li key={items.card.info.id}>{items.card.info.name} --- <button className="bg-cyan-400 w-20 p-2 m-2 rounded-md hover:bg-gray-500" onClick={() => addFoodItem(items.card.info)}>ADD</button></li>
     )
     )}
    </ul>

   </div>
  </div>
 )
}

export default RestaurantMenu