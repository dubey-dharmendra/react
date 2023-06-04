import RestaurantCard from "./RestaurantCard"

import { resList } from "../utils/constants"
import { useState } from "react"


const Body = () => {
 const [restList, setRestList] = useState(resList)
 return (
  <div className="body">
   <button className="filter-btn"
    onClick={() => {
     const filteredData = restList.filter((ele) => ele?.data?.avgRating > 4)
     setRestList(filteredData)
    }}>Top Restaurant</button>
   <div className="res-container">
    {
     restList?.map((element) => <RestaurantCard key={element.data.id} {...element.data} />)
    }
   </div>

  </div>
 )
}

export default Body