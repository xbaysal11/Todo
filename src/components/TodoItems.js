import React, { Component } from "react";
// import ReactDOM, {Component} from "react-dom";
// import TodoItems from "./components/TodoItems";
import FlipMove from "react-flip-move";

class TodoItems extends Component{
	constructor(props){
		super(props);

		this.state = {
			items: []
		}
		this.createTasks = this.createTasks.bind(this);
	}	

	createTasks(item){
		return <li onClick={() => this.delete(item.key)}
								key={item.key}>{item.text}</li>
	}

	delete(key){
		this.props.delete(key);
	}

	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		return(
			<ul className="theList">
			<FlipMove duration="250" easing="ease-out">
			{listItems}
			</FlipMove>
			</ul>
		);
	}
}

export default TodoItems;