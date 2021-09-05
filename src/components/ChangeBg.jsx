import React, { useState } from "react";

const ChangeBg = () => {
	const [dark, setDark] = useState(false);

	const darkStyle = {
		backgroundColor: "#222",
		color: "#eee",
	};

	const lightStyle = {
		backgroundColor: "#eee",
		color: "#222",
	};

	function handleClick() {
		setDark((prevDark) => !prevDark);
	}

	return (
		<div className="bg card text-center" style={dark ? darkStyle : lightStyle}>
			<h1>To Change Background-Color</h1>
			<button
				className="theme"
				onClick={handleClick}
				style={dark ? darkStyle : lightStyle}
			>
				{dark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
			</button>
		</div>
	);
};

export default ChangeBg;
