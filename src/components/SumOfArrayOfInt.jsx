import React from "react";

const SumOfArrayOfInt = () => {
	const numbers = [12, 23, 34, 45, 56];

	const result = numbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);

	return (
		<div className="sumofarr card text-center">
			<h1>sum of array of integers</h1>
			<code>Input: {`[${numbers}]`}</code>
			<code>Output: {result}</code>
		</div>
	);
};

export default SumOfArrayOfInt;
