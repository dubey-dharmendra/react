import React from "react";
import ReactDOM from "react-dom";


// Create react Element 
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is child 1 h1 tag"),
    React.createElement("h2", {}, "this is child 1 h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is child 2 h1 tag"),
    React.createElement("h2", {}, "this is child 2 h2 tag"),
  ]),
]);


// **************** 
// jsx 
const jsxheading = <h1 id="heading">this is react element created with jsx</h1>

const Title = () => <h1 id="heading">this is react element created with jsx</h1>

const HeadingComponet = () => {
  return <div className="parent">
    <Title />             {/* component composition */}
    {/* or */}
    <Title></Title>
    {/* or  */}
    {Title()}

    <h1 id="heading">this is functional component</h1>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
root.render(<HeadingComponet />);
