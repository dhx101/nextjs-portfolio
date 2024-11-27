"use client";
import { PopupButton } from "react-calendly";
import { useState, useEffect } from "react";

const Calendy = () => {
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const root = document.getElementById("root");
		if (root) {
			setRootElement(root);
		} else {
			console.error("Root element not found. Ensure your HTML has an element with id='root'.");
		}
	}, []);

	return (
		<>
			{rootElement ? (
				<PopupButton
				className="satoshi button"
					url="https://calendly.com/dhuangxie/30min"
					rootElement={rootElement}
					text="¡Agendemos una cita!"
				/>
			) : (<button>¡Agendemos una cita!</button>)}
		</>
	);
};

export default Calendy;
