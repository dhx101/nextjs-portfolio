import data from "../../../public/jsons/projects.json";
import { Metadata } from "next";
import ProjectContent from "./ProjectContent";

export const metadata: Metadata = {
	title: "Proyectos Desarrollador Web | SEO On Page | Wordpress",
	description:
		"Aquí puedes encontrar los proyectos en los que he trabajado, tanto propios como aquellos realizados para clientes, con diferentes Stacks y diferentes necesidades.",
	keywords: "Proyectos de Desarrollador Web SEO",
};

const Page = async () => {
	try {
		return <ProjectContent projects={data} />;
	} catch (error) {
		console.error(error);
		return <div>Error al cargar los proyectos</div>;
	}
};

export default Page;
