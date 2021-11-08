import React, { useState } from "react";

const Color = (props) => {
	// {color: "red"}
	// const [color, setColor] = useState("red");
	const color = props.color;
	return <div style={{ backgroundColor: color }}>{color}</div>;
};

export default Color;
