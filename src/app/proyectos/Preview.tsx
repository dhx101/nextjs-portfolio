import Image from "next/image";
import React, { FC } from "react";

// Define the structure of a project
interface Project {
  name: string;
  img: string;
  stack?: string[]; // Optional array of tech stack
  link?: string;
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
          className="project-img"
            src={`/projects/${previewItem.img}`} 
            alt={previewItem.name} 
            width={900} 
            height={600} 
            quality={100} 
           
          />
          <div className="stack">
            {previewItem.stack && previewItem.stack.length > 0 ? (
              <ul>
                {previewItem.stack.map((item, index) => (
                  <li key={index}>
                    <Image
                      src={`/stack/${item}.png`} 
                      alt={item} 
                      width={30} 
                      height={30} 
                      quality={80} 
                      style={{
                        objectFit: "contain", 
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
          <div className="preview__text">
            <h3>{previewItem.name}</h3>
            {/* <Link href={`/proyectos/${hoveredId}`}>Más Información</Link> */}
            <a href={previewItem.link}><Image
             src="/icons/web.svg" 
             alt="Link al proyecto" 
             width={30} 
             height={30} 
             quality={80} 
             style={{
               objectFit: "contain", 
               height: "auto",
             }}/></a>
          </div>
        </>
      ) : (
        <div className="placeholder">Hover over a project to see details</div>
      )}
    </div>
  );
};

export default Preview;
