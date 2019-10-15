import React from 'react';
import logo from './logo.svg';
import Home from './Home/Home';
import './App.css';

class App extends React.Component{
	constructor(props){
		super(props)
		  this.state = {
			persons: [
	         {name:"shailendra", age:20},
	         {name:"tanmayee", age:23},
	         {name:"rajeshwari", age:26}
			],
			showPresent: false
		}
	}


	switchButton = () => {
		this.setState({
			persons: [
		         {name:"ram", age:21},
		         {name:"shyam", age:22},
		         {name:"gyan", age:23}
		]
		})
	}

	changedInputHandler = (event) => {
        this.setState({
			persons: [
		         {name:"rohit", age:21},
		         {name:event.target.value, age:25},
		         {name:"raju", age:30}
		         ]
		     })
    }

	showListItem = () => {
		const doesPresent = this.state.showPresent;
		this.setState({ showPresent: !doesPresent})
	}

	render(){
		const style = {
			backgroundColor:'blue',
			font: 'inherit',
			color: 'white',
			border: '1px solid blue',
			padding: '8px'
		};
		return(
			<div className="App">
			<h1> I am React App </h1>
			<button 
            style={style}
			onClick={this.showListItem}>
			Show List</button>
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
			           > My Hobbies: racing  </Home>
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
