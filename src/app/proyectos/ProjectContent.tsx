'use client';
import React, { CSSProperties, FC, useState } from 'react';
import ScrollerSelf from './ScrollerSelf';
import Preview from './Preview';
import BackBtn from '@/ui/BackBtn/BackBtn';

// Define the structure of a project
interface Project {
  name: string;
  img: string;
  alt: string;
  miniDescription: string;
  stack?: string[];
  link?: string;
}

// Props for the parent component
interface ProjectContentProps {
  projects: Project[];
  style?: CSSProperties;
}

const ProjectContent: FC<ProjectContentProps> = ({ projects, style }) => {
  const [hoveredId, setHoveredId] = useState<number>(0);

  // Function to handle hover events
  const handleHover = (id: number) => {
    setHoveredId(id);
  };

  return (
    <main className="pagProyecto" style={style}>
      <BackBtn />
      <div className="scroller">
        {projects.map((item, index) => (
          <ScrollerSelf
            key={index}
            item={item}
            id={index}
            onHover={handleHover} // Pass the hover callback
            actualID={hoveredId}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
      <Preview
        data={projects} // Changed "array" to "data" for consistency with Preview's props
        hoveredId={hoveredId}
      />
    </main>
  );
};

export default ProjectContent;
