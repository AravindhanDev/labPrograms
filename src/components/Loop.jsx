import React from "react";

const Loop = () => {
	let result = "";

	for (var i = 0; i < 16; i++) {
		if (i % 2 === 0) {
			result = "even";
		} else {
			result = "odd";
		}
	}

	return (
		<div className="loop card text-center">
			<h1>Iterate from 0 to 15 using, check number is even or odd</h1>
			<code>Input: {i - 1}</code>
			<code>Output: {result}</code>
		</div>
	);
};

export default Loop;
