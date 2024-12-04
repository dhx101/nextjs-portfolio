import Image from "next/image";
import React, { FC } from "react";

// Define the structure of a project
interface Project {
  name: string;
  img: string;
  stack?: string[]; // Optional array of tech stack
}

// Define props for the component
interface PreviewProp {
  data?: Project[] | null; // Optional data array
  hoveredId: number | null; // Nullable hovered index
}

const Preview: FC<PreviewProp> = ({ data, hoveredId }) => {
  // Safely access the hovered project's data
  const previewItem = data?.[hoveredId ?? -1] || null; // Ensure hoveredId is valid and fallback for undefined

  return (
    <div className="preview">
      {previewItem ? (
        <>
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
            {/* Uncomment if you have a route for individual project pages */}
            {/* <Link href={`/proyectos/${hoveredId}`}>Más Información</Link> */}
          </div>
        </>
      ) : (
        <div className="placeholder">Hover over a project to see details</div>
      )}
    </div>
  );
};

export default Preview;
