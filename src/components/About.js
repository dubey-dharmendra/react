// import { Outlet } from "react-router-dom"
import { Component } from "react"
import Profile from "./Profile"
import ProfileClass from "./ProfileClassComponent"

class About extends Component {
 constructor(props) {
  super(props)
  console.log("parent constructor");
 }
 componentDidMount() {
  console.log("parent ComponentDid Mount");
 }
 render() {
  console.log("parent render");
  return (
   <div>
    <h1>About Us Page</h1>
    <Profile name="swagger" />
    {/* <ProfileClass name="Swagger" /> */}
   </div>

  )
 }

}

export default About



