import { Metadata } from "next";
import React from "react";
import EstudiosContent from "./EstudiosContent";
import data from "../../../public/jsons/studies.json";
export const metadata: Metadata = {
	title: "Estudios de David Desarrollador Web | SEO On Page | Wordpress",
	description:
		"Aquí puedes encontrar mi trayectoria académica tanto aquellos estudios universitarios y los cursos que cursado a lo largo de mi vida.",
	keywords: "Estudios David Huang Xie",
};

const page = async () => {
	try {
		return <EstudiosContent data={data} />;
	} catch (error) {
		console.error(error);
		return <div>Error al cargar los proyectos</div>;
	}
};

export default page;
