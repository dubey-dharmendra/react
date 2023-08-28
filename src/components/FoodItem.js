
import { REST_LOGO } from "../utils/constants"





const FoodItem = (foodMenu) => {

 console.log(foodMenu);
 const { imageId, name, category, description, price } = foodMenu
 return (
  <div data-testid="inCartItem" className=" h-72 w-[12rem] p-2 m-2 shadow-sm bg-cyan-300">

   <img className="res-logo" src={REST_LOGO + imageId}></img>
   <h2 className="font-bold">{name}</h2>
   <h2 className="font-bold">{category}</h2>
   <h2 className="font-bold">{description}</h2>
   <h2 className="font-bold">{price}</h2>

  </div>
 )
}

export default FoodItem;