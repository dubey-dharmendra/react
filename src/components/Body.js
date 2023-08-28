import RestaurantCard from "./RestaurantCard"
import ShimmerUi from "../components/ShimmerUi"
import { swiggy_api_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline"
import { Link } from "react-router-dom"

const searchData = (resto, searchText) => {
 const filterData = resto.filter((ele) => ele?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
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

   setRestList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants)
   setFilteredRestList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants)
  } catch (error) {
   console.log(error);
  }
 }



 const isOnline = useOnline()

 if (!isOnline) {
  return <h1>offline, Please check your internet connection</h1>
 }
 if (!restList) return null;

 return restList.length == 0 ? (<ShimmerUi />) : (
  <div className="body">
   <div className="h-20 bg-cyan-600 p-1">
    <button className=" bg-red-600"
     onClick={() => {
      const filteredData = restList.filter((ele) => ele?.info?.avgRating > 4)
      setRestList(filteredData)
     }}>Top Restaurant</button>

    <div className="pt-2" >
     <input
      type="text"
      data-testid="searchInput"
      className="search-input" placeholder="search..." value={searchText}
      onChange={(e) => {
       setSearchText(e.target.value)
      }} />

     <button data-testid="myBtnID" className="bg-yellow-50 ml-1 p 2 h-6 w-14 hover:bg-lime-500" onClick={() => {
      const data = searchData(restList, searchText)
      setFilteredRestList(data)
     }}
     >search</button>
    </div>
   </div>
   <div data-testid="restRes" className="flex flex-wrap">
    {
     filteredRestList?.map((element) =>
     (<Link
      key={element.info.id} to={"/restaurant/" + element.info.id}>
      <RestaurantCard resData={element} />
     </Link>)
     )
    }
   </div>

  </div>
 )
}

export default Body