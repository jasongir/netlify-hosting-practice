import React, { useState } from "react";

const UserInput = () => {
	// state to control our input
	const [inputState, setInputState] = useState("initial state!");
	// onChange handler
	const changeHandler = (e) => {
		// passes event object with value
		setInputState(e.target.value);
		console.log(e);
	};
	// our jsx element
	return (
		<>
			<p>{inputState}</p>
			<input type="text" value={inputState} onChange={changeHandler} />
		</>
	); ///
};

export default UserInput;
