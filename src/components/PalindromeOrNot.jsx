import React from "react";

const PalindromeOrNot = () => {
	let str = "malayalam";

	let reverseStr = str.toLowerCase().split("").reverse().join("");

	return (
		<div className="palindrome card text-center">
			<h1>String is palindrome or not</h1>
			<code>String: {str}</code>
			<code>reversed_String: {reverseStr}</code>
			<code>{str === reverseStr ? "Is Palindrome" : "Not a Palindrome"}</code>
		</div>
	);
};

export default PalindromeOrNot;
