import React from "react";

const ReverseANumber = () => {
	let number = 123456789;

	let value = parseFloat(number.toString().split("").reverse().join(""));

	console.log(value);

	return (
		<div className="reverse card text-center">
			<h1>Reverse a number</h1>
			<code>Original: {number}</code>
			<code>Reversed: {value}</code>
		</div>
	);
};

export default ReverseANumber;
