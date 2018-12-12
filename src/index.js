import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import "./index.css";

// backgroundImage: `url(${Background})`;


var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<TodoList/>
	</div > ,
	destination
);