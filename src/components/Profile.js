import { useState, useEffect } from 'react'

const Profile = (props) => {
 const [count, setCount] = useState(0);

 useEffect(() => {
  const timer = setInterval(() => {
   console.log('this is timer');
  }, 1000)


  return () => {
   clearInterval(timer)
   console.log("this return function use to clearup same like componentWillMount in Class Based Component ");
  }
 })
 return (
  < div >
   <h1>This is Profile Component</h1>
   <h2>Name:{props.name}</h2>
   <h2>count:{count}</h2>
   <button onClick={() => { setCount(count + 1) }} >Count ++</button>
  </div >
 )
}



export default Profile