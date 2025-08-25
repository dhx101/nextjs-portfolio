import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
// import NavLinks from "@/ui/NavLinks/NavLinks";
// import Image from "next/image";

export const metadata: Metadata = {
	title: "David Huang Xie Desarrollador Web | SEO On Page | Wordpress",
	description:
		"Soy David Huang Xie, Desarrollador web, apasionado por el SEO, Wordpress y la optimización de sitios web para mejorar su rendimiento y visibilidad en línea.",
	keywords: "Desarrollador Web SEO",
	icons: "./file.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-PJMKVE24MK"
				/>
				<Script id="google-analytics">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJMKVE24MK');
          `}
				</Script>
			</head>
			<body className="background">{children}</body>
		</html>
	);
}
