import type { Metadata } from "next";
import "./globals.css";
// import NavLinks from "@/ui/NavLinks/NavLinks";
// import Image from "next/image";

export const metadata: Metadata = {
	title: "David Huang Xie Desarrollador Web | SEO On Page | Wordpress",
	description:
		"Soy David Huang Xie, Desarrollador web, apasionado por el SEO, Wordpress y la optimización de sitios web para mejorar su rendimiento y visibilidad en línea.",
	keywords: "Desarrollador Web SEO",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className="background">
				{children}
			</body>
		</html>
	);
}
