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
  this.timer = setInterval(() => {
   console.log('this is timer');
  }, 1000)
 }

 componentDidUpdate(prePros, preState) {
  console.log("called every sub-render/every re-render");
  if (this.state.count != preState.count) {
   // code 
  }


 }

 componentWillUnmount() {
  console.log("called once ,when destroy mounted component, it is called on we go on page to another page");

  clearInterval(this.timer)
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