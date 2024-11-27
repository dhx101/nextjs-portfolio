"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
	const pathname = usePathname();

	return (
		<nav className="nav">
			<Link
				className={`nav-link ${pathname === "/" ? "active" : ""}`}
				href="/">
				Home
			</Link>
			<Link
				className={`nav-link ${pathname === "/about" ? "active" : ""}`}
				href="/proyectos">
				Proyectos
			</Link>
			<Link
				className={`nav-link ${pathname === "/about" ? "active" : ""}`}
				href="/experiencia">
				Experiencia
			</Link>
			<Link
				className={`nav-link ${pathname === "/about" ? "active" : ""}`}
				href="/estudios">
				Estudios
			</Link>
		</nav>
	);
};

export default NavLinks;
