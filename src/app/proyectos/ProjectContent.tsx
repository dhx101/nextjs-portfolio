'use client'
import React, { CSSProperties, FC, useState } from 'react'
import ScrollerSelf from './ScrollerSelf';
import Preview from './Preview';
import BackBtn from '@/ui/BackBtn/BackBtn';

interface Project {
	name: string;
	img: string;
	alt: string;
	miniDescription: string;
	stack?: string[];
	link?: string;
}

interface ProjectContentProps {
	projects: Project[];
    style?: CSSProperties
}

const ProjectContent: FC<ProjectContentProps> = ({projects}) => {
    const [hoveredId, setHoveredId] = useState<number>(0);

	// Function to handle hover events
	const handleHover = (id: number) => {
		setHoveredId(id);

	};
	
  return (
    <main className="pagProyecto">
		<BackBtn/>
			<div className="scroller">
				{projects.map((item, index) => (
					<ScrollerSelf
						key={index}
						item={item}
                        id={index}
						onHover={handleHover} // Pass the hover callback
						actualID= {hoveredId}
						style={{ animationDelay: `${index * 0.1}s` }}
					/>
				))}
			</div>
			<Preview
				array={projects}
                hoveredId={
                    hoveredId
                }
			/>
		</main>
  )
}

export default ProjectContent
