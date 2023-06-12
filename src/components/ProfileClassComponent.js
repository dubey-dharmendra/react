import React from 'react'


class ProfileClass extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   count: 0,
   count2: 0
  }
  console.log("child constructor");
 }

 componentDidMount() {
  console.log("child ComponentDid Mount");
 }

 render() {
  console.log("child render");
  return (
   <div>
    <h1> profile class component</h1>
    <h2>Name:{this.props.name}</h2>
    <h2>count:{this.state.count}</h2>
    <button onClick={() => {
     this.setState({
      count: +1
     });
    }}>Count ++</button>
   </div>
  )
 }
}


export default ProfileClass