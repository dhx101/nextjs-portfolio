export interface StudiesProp {
	degree: string;
	institution: string;
	img: string;
	time: string;
	description?: string[];
}

export const getStudies = async (): Promise<StudiesProp[]> => {
	const response = await fetch(`${process.env.BASE_URL}/api/estudios`, {
		cache: "no-store", // Avoid caching for dynamic content
	});
	if (!response.ok) {
		throw new Error("Error fetching Studies data");
	}
	return response.json();
};
