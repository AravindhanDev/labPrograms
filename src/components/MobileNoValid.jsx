import React, { useState } from "react";

const MobileNoValid = () => {
	const [inputValue, setInputValue] = useState("");
	const [wrong, setWrong] = useState(false);

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	const wrongStyle = {
		borderColor: "#c00",
		color: "#c00",
	};

	const rightStyle = {
		borderColor: "#000",
		color: "#000",
	};

	function IsMobileNumber(txtMobId) {
		var mob = /^[1-9]{1}[0-9]{9}$/;
		if (mob.test(inputValue) === false) {
			setWrong(true);
			alert("Please enter valid mobile number");
		} else {
			setWrong(false);
			alert("Valid mobile number");
		}
	}

	return (
		<div className="mobile card text-center">
			<h1>Number is mobile no or not</h1>
			<input
				id="tel"
				type="tel"
				value={inputValue}
				onChange={handleChange}
				style={wrong ? wrongStyle : rightStyle}
			/>
			<button id="check" onClick={IsMobileNumber}>
				check
			</button>
		</div>
	);
};

export default MobileNoValid;
