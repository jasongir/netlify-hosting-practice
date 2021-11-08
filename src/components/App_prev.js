import React, { useState } from "react";

import Main from "./Main";
import "./App.css";
import Color from "./Color";

function App() {
	const colors = ["red", "white", "blue"];

	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(0);
	const toggleLiked = () => {
		setLiked(!liked);
		liked ? setLikes(likes - 1) : setLikes(likes + 1);
	};

	return (
		<div>
			<button onClick={toggleLiked}>change liked</button>
			<p>{liked ? "liked" : "not liked"}</p>
			<p>{likes}</p>
			{colors.map((color) => (
				<Color color={color} />
			))}
		</div>
	);
	// const [blueMode, setBlueMode] = useState(false);

	// const toggleBlue = () => setBlueMode(!blueMode);

	// return (
	// 	<div
	// 		className={blueMode ? "blue-background" : "white-background"}
	// 		style={{ textAlign: "center" }}
	// 	>
	// 		<header>
	// 			<h1 className="top-title">This is the title!</h1>
	// 			<h2 className="top-subtitle">And this is a subtitle</h2>
	// 		</header>
	// 		<button onClick={toggleBlue}>Set to {blueMode ? "white" : "blue"}</button>
	// 		<Main />
	// 	</div>
	// );
}

export default App;
