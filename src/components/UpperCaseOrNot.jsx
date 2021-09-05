import React from "react";

const UpperCaseOrNot = () => {
	let str = "VisualStudioCode";
	let check = str.charAt(0);
	let result;
	if (check === check.toUpperCase()) {
		result = "Is UpperCase";
	} else {
		result = "Not UpperCase";
	}

	return (
		<div className="uppercase card text-center">
			<h1>First Charecter of String is uppercase or not</h1>
			<code>{str}</code>
			<code>{result}</code>
		</div>
	);
};

export default UpperCaseOrNot;
