import React, { CSSProperties, FC } from "react";
import Year from "../Reloj/Year";

interface FooterProps {
	style?: CSSProperties;
}

const Footer: FC<FooterProps> = ({ style }) => {
	return (
		<div
			className="block footer"
			style={style}>
			<p>
				&#169; <Year /> | Creado con &#128151; y esmero con React y NextJs, por David Huang Xie
			</p>
		</div>
	);
};

export default Footer;
