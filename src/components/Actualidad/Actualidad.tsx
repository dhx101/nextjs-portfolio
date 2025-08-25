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
			<p>Estoy trabajando en <b><a href="https://soleacreativa.com/" target="_blank">Soleá Creativa</a></b> como desarrollador web y especialista en SEO</p>
		</div>
	);
};

export default Actualidad;
