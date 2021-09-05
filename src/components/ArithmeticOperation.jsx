import React, { useState } from "react";

const ArithmeticOperation = () => {
	const [inp1, setInp1] = useState("");
	const [inp2, setInp2] = useState("");
	const [result, setResult] = useState("");

	function handleChange1(e) {
		setInp1(e.target.value);
	}

	function handleChange2(e) {
		setInp2(e.target.value);
	}

	function handleClickMultiply() {
		setResult(inp1 * inp2);
		setInp1("");
		setInp2("");
	}

	function hanldeClickDivide() {
		setResult(inp1 / inp2);
		setInp1("");
		setInp2("");
	}

	return (
		<div className="arithmetic card text-center">
			<h1>Calculate multiplication and division</h1>
			<input type="number" id="inp1" value={inp1} onChange={handleChange1} />
			<input type="number" id="inp2" value={inp2} onChange={handleChange2} />
			<div className="btn">
				<input type="button" value="Multiply" onClick={handleClickMultiply} />
				<input type="button" value="Division" onClick={hanldeClickDivide} />
			</div>
			<code id="result">{result}</code>
		</div>
	);
};

export default ArithmeticOperation;
