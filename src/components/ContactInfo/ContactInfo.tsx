import React, { CSSProperties, FC } from "react";

interface ContactInfoProps {
	style?: CSSProperties;
}

const ContactInfo: FC<ContactInfoProps> = ({ style }) => {
	return (
		<div
			className="block contact"
			style={style}>
			<h2 className="title-gabinet">¡Trabajemos juntos!</h2>
			<div>
				<p className="gabinet details">Detalles de contacto</p>
				<a
					href="mailto:dhuangxie@gmail.com"
					target="_blank"
					rel="noopener noreferrer">
					dhuangxie@gmail.com
				</a>
				<p>España</p>
			</div>
			<div>
				<p className="gabinet details">Socials</p>
				<a
					href="https://www.linkedin.com/in/dhuangxie/"
					target="_blank"
					rel="noopener noreferrer">
					Linkedin
				</a>
				<a
					href="https://github.com/dhx101"
					target="_blank"
					rel="noopener noreferrer">
					Github
				</a>
			</div>
		</div>
	);
};

export default ContactInfo;
