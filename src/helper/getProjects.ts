export interface Project {
	name: string;
	img: string;
	alt: string;
	miniDescription: string;
	stack?: string[];
	link?: string;
}

export const getProjects = async (): Promise<Project[]> => {
	const response = await fetch(`${process.env.BASE_URL}/api/proyectos`, {
		cache: "no-store", // Avoid caching for dynamic content
	});
	if (!response.ok) {
		throw new Error("Error fetching project data");
	}
	return response.json();
};
