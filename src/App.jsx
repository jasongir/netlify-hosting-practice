import React, { useState, useEffect } from "react";

const App = () => {
	useEffect(() => {
		console.log("first render");
	}, []);

	const [count, setCount] = useState(0);
	const changeCount = () => {
		setCount(Math.floor(Math.random() * 100));
	};
	useEffect(() => {
		console.log("count changed");
	}, [count]);

	const [likes, setLikes] = useState(0);
	const changeLikes = () => {
		setLikes(likes + 1);
	};

	const [retweets, setRetweets] = useState(0);
	const changeRetweets = () => {
		setRetweets(retweets + 3);
	};

	useEffect(() => {
		// if (!(retweets === 0 && likes === 0))
		console.log("likes or retweets updated");
	}, [retweets, likes]);

	return (
		<div>
			<h1>Hello, world!</h1>

			<div>
				{count}
				<button onClick={changeCount}>change count</button>
			</div>

			<div>
				{likes}
				<button onClick={changeLikes}>change likes</button>
			</div>

			<div>
				{retweets}
				<button onClick={changeRetweets}>change retweets</button>
			</div>
		</div>
	);
};

export default App;

/*
useEffect(() => {
   console.log("on first render");
   return () => {};
}, []);

useEffect(() => {
   if (count != 0) console.log(`count has changed to ${count}!!`);
   return () => {};
}, [count]);
*/
