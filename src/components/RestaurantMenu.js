import { useParams } from "react-router-dom"

const RestaurantManu = () => {
 const { id } = useParams()
 return (
  <div>
   <h1>This is Restaurant Page id = {id}</h1>
  </div>
 )
}

export default RestaurantManu