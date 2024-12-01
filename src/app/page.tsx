import React, { FC, CSSProperties } from "react";
import AboutMe from "@/components/AboutMe/AboutMe";
import Actualidad from "@/components/Actualidad/Actualidad";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Estudios from "@/components/Estudios/Estudios";
import Experiencia from "@/components/Experiencia/Experiencia";
import Footer from "@/components/Footer/Footer";
import MeData from "@/components/MeData/MeData";
import Proyectos from "@/components/Proyectos/Proyectos";
import Reloj from "@/components/Reloj/Reloj";

// Define a type for components that accept a `style` prop
type StyledComponent = FC<{ style?: CSSProperties }>;

const components: StyledComponent[] = [
	MeData,
	AboutMe,
	ContactInfo,
	Reloj,
	Estudios,
	Proyectos,
	Actualidad,
	Experiencia,
	Footer,
];

const Home: FC = () => {
	return (
		<main className="home">
			{components.map((Component, index) => (
				<Component
					key={index}
					style={{
						animationDelay: `${index * 0.1}s`,
					}}
				/>
			))}
			<div id="root"></div>
		</main>
	);
};

export default Home;
