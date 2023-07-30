import { createContext } from "react";


const UserContext = createContext({
 user: {
  name: "Swagger",
  email: "swagger@gmail.com"
 }
})


export default UserContext;