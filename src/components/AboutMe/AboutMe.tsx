
import React, { FC, CSSProperties } from "react";

interface AboutMeProps {
	style?: CSSProperties;
}

const AboutMe:FC<AboutMeProps> = ({style}) => {
  return (
    <div className="block about-me" style={style}>
				<h2 className="title-gabinet">Sobre mí</h2>
				<div className="satoshi-light">
					<p>Buenas, soy David, un Desarrollador Front End de España.</p>
					<ul>
						<li>Javascript</li>
						<li>React</li>
						<li>Nextjs</li>
						<li>Node.js</li>
						<li>WordPress</li>
						<li>Elementor</li>
						<li>WP Bakery</li>
						<li>SeRanking</li>
						<li>G4 y SC</li>
					</ul>
					<p>
						Aparte de desarrollar páginas webs, soy un apasionado de los videojuegos, el gimnasio y
						viajar por el mundo. También me gusta cocinar, aunque limpiar los trastos no tanto.
					</p>
					<p>
						Aunque tengo preferencia por ciertas herramientas de trabajo, siempre me adapto a las
						necesidades del cliente para elegir la mejor solución para cada proyecto.
					</p>
				</div>
			</div>
  )
}

export default AboutMe
