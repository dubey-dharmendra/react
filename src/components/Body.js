import RestaurantCard from "./RestaurantCard"
import ShimmerUi from "../components/ShimmerUi"
import { resList } from "../utils/constants"
import { useState, useEffect } from "react"

const searchData = (resto, searchText) => {
 const filterData = resto.filter((ele) => ele?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
 return filterData;
}


const Body = () => {
 const [restList, setRestList] = useState(resList)
 const [filteredRestList, setFilteredRestList] = useState(resList)

 const [searchText, setSearchText] = useState("")

 // useEffect(() => {
 //  fetchData()
 // }, [])

 // const fetchData = async () => {
 //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5270362&lng=77.13593279999999&page_type=DESKTOP_WEB_LISTING")
 //  console.log(data);
 //  const json = data.json()
 //  setRestList(json?.data?.cards[2]?.data?.data?.cards)
 // }

 if (!resList) return null;

 if (filteredRestList.length == 0)
  return <h1>No Restaurant Founded</h1>

 return (restList.length == 0) ? <ShimmerUi /> : (
  <div className="body">
   <div className="top">
    <button className="filter-btn"
     onClick={() => {
      const filteredData = restList.filter((ele) => ele?.data?.avgRating > 4)
      setRestList(filteredData)
     }}>Top Restaurant</button>

    <div className="search-container">
     <input type="text" className="search-input" placeholder="search..." value={searchText} onChange={(e) => {
      setSearchText(e.target.value)
     }} />

     <button className="search-btn" onClick={() => {
      const data = searchData(restList, searchText)
      setFilteredRestList(data)
     }}
     >search</button>
    </div>
   </div>
   <div className="res-container">
    {
     filteredRestList?.map((element) => <RestaurantCard key={element.data.id} {...element.data} />)
    }
   </div>

  </div>
 )
}

export default Body