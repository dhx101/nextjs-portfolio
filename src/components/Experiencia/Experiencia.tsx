
import LinkIncon from "@/ui/LinkIcon/LinkIncon";
import React, { CSSProperties, FC } from "react";

interface ExperienciaProps {
	style?: CSSProperties;
}

const Experiencia: FC<ExperienciaProps> = ({style}) => {
	return (
		<div className="block experiencia" style={style}>
			<h2 className="tittle-gabinet">Experiencia</h2>
			<LinkIncon />
		</div>
	);
};

export default Experiencia;
