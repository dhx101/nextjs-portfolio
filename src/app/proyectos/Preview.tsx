import { Project } from "@/helper/getProjects";
import Image from "next/image";
// import Link from "next/link";
import React, { FC } from "react";

interface PreviewProp {
	array?: Project[] | null; // Ensures the array is either a valid list of projects or null
	hoveredId: number | null; // Allows hoveredId to be null when no item is hovered
}

const Preview: FC<PreviewProp> = ({ array, hoveredId }) => {
	// Safely access the hovered project's data
	const previewItem = array && hoveredId !== null && array[hoveredId] ? array[hoveredId] : null;

	return (
		<div className="preview">
			{previewItem ? (
				<React.Fragment>
					<Image
						src={`/projects/${previewItem.img}`} // Path to the project's image
						alt={previewItem.name} // Alt text for accessibility
						width={900} // Example width
						height={600} // Example height
						quality={80} // Image quality for optimization
						style={{ objectFit: "cover", width: "100%", height: "auto" }}
					/>
					<div className="stack">
						{previewItem.stack && previewItem.stack.length > 0 ? (
							<ul>
								{previewItem.stack.map((item, index) => (
									<li key={index}>
										<Image
											src={`/stack/${item}.png`} // Path to the stack image
											alt={item} // Alt text for accessibility
											width={30} // Example width
											height={30} // Example height
											quality={80} // Image quality for optimization
											style={{
												objectFit: "contain", // Adjust for tech stack images
												height: "auto",
											}}
										/>
									</li>
								))}
							</ul>
						) : (
							<p>No se ha especificado el Stack utilizado</p>
						)}
					</div>
					<div className="previewText">
						<h3>{previewItem.name}</h3>
						{/* <Link href={`/proyectos/${hoveredId}`}>Más Información</Link> */}
					</div>
				</React.Fragment>
			) : (
				<div className="placeholder">Hover over a project to see details</div>
			)}
		</div>
	);
};

export default Preview;
