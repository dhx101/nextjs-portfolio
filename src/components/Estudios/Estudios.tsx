import LinkIncon from "@/ui/LinkIcon/LinkIncon";
import React, { CSSProperties, FC } from "react";

interface EstudiosProps {
	style?: CSSProperties;
}

const Estudios: FC<EstudiosProps> = ({ style }) => {
	return (
		<a
			href="/estudios"
			className="block estudios"
			style={style}>
			<h2 className="title-gabinet">Estudios</h2>
			<LinkIncon />
		</a>
	);
};

export default Estudios;
