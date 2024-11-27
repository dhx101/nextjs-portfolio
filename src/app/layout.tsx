import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import NavLinks from "@/ui/NavLinks/NavLinks";
// import Image from "next/image";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "David Huang Xie Desarrollador Web | SEO On Page | Wordpress",
	description:
		"Soy David Huang Xie, Desarrollador web, apasionado por el SEO, Wordpress y la optimización de sitios web para mejorar su rendimiento y visibilidad en línea.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`background ${geistSans.variable} ${geistMono.variable}`}>
				{/* <header className="header">
          <Image
          className="header-img"
          src="/David/David.png"
          alt="Foto de David"
          width="200"
          height="200"
          />
          <NavLinks/>
        </header> */}
				<main>{children}</main>
				{/* <footer>

        </footer> */}
			</body>
		</html>
	);
}
