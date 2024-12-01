import React, { CSSProperties, FC } from "react";

interface ActualidadProps {
	style?: CSSProperties;
}

const Actualidad: FC<ActualidadProps> = ({ style }) => {
	return (
		<div
			className="block actualidad"
			style={style}>
			<h2 className="gabinet">Ahora</h2>
			<p className="special">¿Qué hago?</p>
			<p>Trabajo como desarrollador web Freelance</p>
		</div>
	);
};

export default Actualidad;
