const Shimmer = () => {
 return (
  <div className="flex">
   {Array(10).fill("").map((e, index) => <div key={index} className="flex-wrap m-1 h-72 w-64 bg-gray-500"></div>)}
  </div>
 )
}

export default Shimmer