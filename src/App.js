import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/react-logo.png"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      helpText: "Помоги выучить React!",
      userData: ""
    }

    this.inputClick = this.inputClick.bind(this)
  }

  render(){
    return (<div className = "name">
      <Header title="ReacT"/>
      <h1> { this.state.helpText } </h1>   
      <h2>{ this.state.userData }</h2>
      <input placeholder = { this.state.helpText }
        onChange={event => this.setState({userData: event.target.value})}
        onClick = { this.inputClick } onMouseEnter = { this.mouseOver }/>   
      <p> { this.state.helpText == "Помоги выучить React!" ? "NO" : "Yes" } </p>  
      <Image image={logo}/> 
      <img src={logo} className="image"/>
    </div>)
  }

  inputClick(){ 
    this.setState({ helpText: "Спасибо!" })
    console.log("Clicked") 
  }
  mouseOver(){ console.log("Mouse Over") }
}

export default App