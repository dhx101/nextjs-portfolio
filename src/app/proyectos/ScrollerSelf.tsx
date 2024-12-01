"use client";
// import Link from "next/link";

interface SrollerProp {
	item: {
		name: string;
		img: string;
		alt: string;
		miniDescription: string;
		stack?: string[];
		link?: string;
	};
	style?: React.CSSProperties; // Add this line to accept inline styles
	id: number;
	onHover: (id: number) => void;
	actualID: number;
}

const ScrollerSelf: React.FC<SrollerProp> = ({ item, style, id, onHover, actualID }) => {
	return (
		// <Link
		// 	style={style}
		// 	className={`singleScroller ${actualID === id ? "active-project" : ""}`}
		// 	href={`/proyectos/${id}`}
		// 	onMouseEnter={() => onHover(id)}>
		// 	<h2>{item.name}</h2>
		// </Link>
		<div
			style={style}
			className={`singleScroller ${actualID === id ? "active-project" : ""}`}
			onMouseEnter={() => onHover(id)}>
			<h2>{item.name}</h2>
		</div>
	);
};

export default ScrollerSelf;
