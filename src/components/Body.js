import RestaurantCard from "./RestaurantCard"
import ShimmerUi from "../components/ShimmerUi"
import { swiggy_api_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline"
import { Link } from "react-router-dom"

const searchData = (resto, searchText) => {
 const filterData = resto.filter((ele) => ele?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
 return filterData;
}


const Body = () => {
 const [restList, setRestList] = useState([])
 const [filteredRestList, setFilteredRestList] = useState([])

 const [searchText, setSearchText] = useState("")

 useEffect(() => {
  getRestaurantByApi()
 }, [])

 const getRestaurantByApi = async () => {
  try {
   const data = await fetch(swiggy_api_URL)
   const json = await data.json()
   setRestList(json?.data?.cards[2]?.data?.data?.cards)
   setFilteredRestList(json?.data?.cards[2]?.data?.data?.cards)
  } catch (error) {
   console.log(error);
  }
 }



 const isOnline = useOnline()

 if (!isOnline) {
  return <h1>offline, Please check your internet connection</h1>
 }
 if (!restList) return null;



 return (filteredRestList.length == 0) ? <ShimmerUi /> : (
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
   <div className="flex flex-wrap">
    {
     filteredRestList?.map((element) =>
     (<Link
      key={element.data.id} to={"/restaurant/" + element.data.id}>
      <RestaurantCard resData={element} />
     </Link>)
     )
    }
   </div>

  </div>
 )
}

export default Body