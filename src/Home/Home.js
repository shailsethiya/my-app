import React from 'react';

const home = (props) => {
   return (
    <div>
   	<h1 onClick={props.click}>I'm a {props.name} & i am {props.age} year old</h1>
   	<p>{props.children}</p>
   	<input type="text" onChange={props.changed} value={props.name} /> 
    </div>
   	)
}

export default home;