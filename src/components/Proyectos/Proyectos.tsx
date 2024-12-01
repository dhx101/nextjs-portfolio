import LinkIncon from "@/ui/LinkIcon/LinkIncon";
import Link from "next/link";
import React, { CSSProperties, FC } from "react";

interface ProyectosProps {
	style?: CSSProperties;
}

const Proyectos: FC<ProyectosProps> = ({ style }) => {
	return (
		<Link
			href="/proyectos"
			className="block proyectos"
			style={style}>
			<h2 className="title-gabinet">Proyectos</h2>
			<div>
				<p>Descubre mis proyectos</p>
				<LinkIncon />
			</div>
		</Link>
	);
};

export default Proyectos;
