import React, { useState } from "react";

const TemperatureConverter = () => {
	const [temp, setTemp] = useState("");
	const [result, setResult] = useState("");

	function handleChange(e) {
		setTemp(e.target.value);
	}

	function convertFtoC() {
		let res = ((temp - 32) * 5) / 9 + " F";
		setResult(res);
		setTemp("");
	}

	function convertCtoF() {
		let res = (temp * 9) / 5 + 32 + " C";
		setResult(res);
		setTemp("");
	}

	return (
		<div className="temperature card text-center">
			<h1>Temperature - Celsius Fahrenheit</h1>
			<input type="number" value={temp} onChange={handleChange} />
			<div className="btn">
				<input type="button" value="Fahrenheit" onClick={convertFtoC} />
				<input type="button" value="Celsius" onClick={convertCtoF} />
			</div>
			<code id="result">{result}</code>
		</div>
	);
};

export default TemperatureConverter;
