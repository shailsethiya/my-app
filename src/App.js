import React from 'react';
import logo from './logo.svg';
import Home from './Home/Home';
import './App.css';

class App extends React.Component{
	constructor(props){
		console.log("constructor");
		super(props)
		this.state = {
			persons: [
	         {name:"shailendra", age:23},
	         {name:"tanmayee", age:23},
	         {name:"raji", age:20}
			],
			showPresent: false
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log("getDerivedStateFromProps");
		return false;
	}


	switchButton = (newName) => {
		// console.log("successfully click");
		this.setState({
			persons: [
		         {name:newName, age:21},
		         {name:"shyam", age:28},
		         {name:"raju", age:12}
		]
		})
	}

	changedInputHandler = (event) => {
        this.setState({
			persons: [
		         {name:"ram", age:21},
		         {name:event.target.value, age:28},
		         {name:"raju", age:12}
		]
		})
	}

	showListItem = () => {
		const doesPresent = this.state.showPresent;
		this.setState({ showPresent: !doesPresent})
	}

	componentDidMount(){
		console.log("componentDidMount");
	}




render(){
	console.log("render method ===>>>")
    return(
        <div className="App">
        <h1> I am class based component </h1>
        <button onClick={this.showListItem}>switch</button>
        {
        	this.state.showPresent === true ? 

        	<div> 
	        <Home 
	           name={this.state.persons[0].name}  
	           age={this.state.persons[0].age} />
	        <Home 
	           name={this.state.persons[1].name} 
	           age={this.state.persons[1].age} 
	           click={this.switchButton}
	           changed={this.changedInputHandler}
	           > I am boy </Home>
	        <Home 
	           name={this.state.persons[2].name} 
	           age={this.state.persons[2].age} />
           </div>

           : 

           null

        }
        </div>
      );
  }
}


export default App;
