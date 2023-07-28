import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {
 return (
  <div className="border-2 border-black p-2 m-2">
   <h3 className="font-bold text-2xl">{title}</h3>
   {isVisible ? (
    <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">
     hide
    </button>) : (
    <button onClick={() => setIsVisible(true)} className="cursor-pointer underline">
     show
    </button>)
   }

   {isVisible && <p>{description}</p>}
  </div>
 )
}


const Instamart = () => {
 const [isVisibleSetcion, setIsVisibleSetcion] = useState("")
 return (
  <div>
   <h1>Insta Mart</h1>
   <Section title={"About Instamart"} description={"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"}

    isVisible={isVisibleSetcion === "about"}
    setIsVisible={() => setIsVisibleSetcion("about")}

   />
   <Section title={"Team Instamart"} description={"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"}
    isVisible={isVisibleSetcion === "team"}
    setIsVisible={() => setIsVisibleSetcion("team")}
   />
   <Section title={"career Instamart"} description={"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"}
    isVisible={isVisibleSetcion === "career"}
    setIsVisible={() => setIsVisibleSetcion("career")}
   />
  </div>
 )
}

export default Instamart