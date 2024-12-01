"use client";
import { useParams } from "next/navigation";
import React, { FC } from "react";

interface SingleProjectProps {
	projects: {
		name: string;
		img: string;
		alt: string;
		miniDescription: string;
		stack?: string[];
		link?: string;
	};
}

const SingleProject: FC<SingleProjectProps> = ({ projects }) => {
	const params = useParams();
    const item = projects[params.id]
	return <div>
        <h2></h2>
    </div>;
};

export default SingleProject;
