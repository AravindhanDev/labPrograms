import React from "react";

const LeapYearOrNot = () => {
	let year = 2012;
	let result = "";
	if (year % 4 === 0) {
		result = `${year} is Leap Year`;
	} else {
		result = `${year} is not Leap Year`;
	}

	return (
		<div className="leapyear card text-center ">
			<h1>whether it is leap year or not</h1>
			<code>Input: {year}</code>
			<code>Output: {result}</code>
		</div>
	);
};

export default LeapYearOrNot;
