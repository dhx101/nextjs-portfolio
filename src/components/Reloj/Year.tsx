"use client";
import React, { useEffect, useState } from "react";

const Year = () => {
	const [year, setYear] = useState(2024);

	useEffect(() => {
		const date = new Date();
		const actualYear = date.getFullYear();
		setYear(actualYear);
	}, []);
	return <span>{year}</span>;
};

export default Year;
