import React, { CSSProperties, FC } from "react";
import { StudiesProp } from "@/helper/getStudies";
import BackBtn from "@/ui/BackBtn/BackBtn";
import Image from "next/image";

interface StudiesContentProps {
	data: StudiesProp[];
	style?: CSSProperties;
}

const EstudiosContent: FC<StudiesContentProps> = ({ data }) => {
	return (
		<main className="estudiosPage">
			<BackBtn />
			<ul>
				{data.map((item, index) => (
					<li
						key={index}
						className="block">
						<p>{item.degree}</p>
						<p>{item.time}</p>
						<div className="img">
                            <Image
                                src={item.img}
                                alt={item.degree}
                                width={500} // Example width
                                height={350} // Example height
                                quality={80} // Image quality for optimization
                                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                            />
                        </div>
						<p className="school">{item.institution}</p>
						<div className="text">
							{item.description?.map((item, index) => (
								<p key={index}>{item}</p>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};

export default EstudiosContent;
