//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Click an image to earn a point, but don't click on the same picture twice. Click all 12 pics, and you win.</h1>
	</header>
);

export default Jumbotron;