import React from "react";

function Counter() {
	const [count, setcount] = React.useState(0);

	const addToCounter = () => {
		setcount((prevCount) => prevCount + 1);
	};

	const removeFromCounter = () => {
		setcount((prevCount) => prevCount - 1);
	};
	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<button id="+" onClick={addToCounter}>
				+
			</button>
			<span id="counter">{count}</span>
			<button id="-" onClick={removeFromCounter}>
				-
			</button>
		</div>
	);
}

export default Counter;
