import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json([
		{
			name: "Psicología Montse Coronado",
			img: "MontseCoronado.png",
			alt: "E-commerce de Montse Coronado",
			miniDescription:
				"Página web y comercio electrónico para la Psicóloga Montse Coronado, realizada con Wordpress, Elementor y la parte del comercio electrínico fue realizada con Woocomerce donde cuenta con varios productos y una pasarela de pago con una TPVV de un banco.",
			stack: ["Wordpress", "Elementor", "Woocomerce"],
			link: "https://montsecoronado.com/",
		},
		{
			name: "Fisio & Yoga Málaga",
			img: "FisioAndYoga.png",
			alt: "E-commerce de Fisio & Yoga",
			miniDescription:
				"Página web y comercio electrónico para la fisioterapeuta Gemma, realizada con Wordpress, Elementor y la parte del comercio electrínico fue realizada con Woocomerce donde cuenta con varios productos y una pasarela de pago con una TPVV de un banco.",
			stack: ["Wordpress", "Elementor", "Woocomerce"],
			link: "https://www.fisioandyogamalaga.com/",
		},
		{
			name: "Portfolio/Curriculum Web",
			img: "Portfolio.png",
			alt: "Curriculum y Portfolio",
			miniDescription:
				"Web para mi mismo, donde he utilizado diferentes tecnologías como HTML, React, SCSS para crear una web donde mostrar mis proyectos en los que he trabajado y los conocimientos que tengo. El diseño simple es mio y la web ha sido maquetada a código.",
			stack: ["HTML", "SCSS", "React", "Typescript"],
			link: "https://dhx101.github.io/portfolio/",
		},
		{
			name: "Almoraima Soluciones",
			img: "Almoraima.png",
			alt: "Agencia de Marketing Digital Almoraima Soluciones",
			miniDescription:
				"Web para la Agencia de Marketing Digital Almoraima Soluciones, el diseño y la maquetación fuera realizada por mi, a su vez se realizaron trabajos de SEO onm Page, se utilaron Wordpress y Elementor para la maquetación de la web.",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.almoraimasoluciones.es/",
		},
		{
			name: "Pokedex",
			img: "Pokedex.png",
			alt: "Pokedex",
			miniDescription:
				"Aplicación de Pokedex, donde te muestran los pokemon de las diferentes generaciones, donde puedes ordenar por tipos. La apliación fue creada con HTML, Javascript y SCSS con una metodología BEM, los pokemons provienen de una API de PokeApi.co donde realizamos un fetch de los contenidos necesarios para despues crearlos en nuestro DOM.",
			stack: ["HTML", "JS", "SCSS"],
			link: "https://dhx101.github.io/pokedex/",
		},
		{
			name: "Arion Arquitectura",
			img: "Arion.png",
			alt: "Arion Arquitectura técnica",
			miniDescription:
				"Web para la agencia de Arquitectura técnica Arión Arquitectura, querian un rediseño de su web antigua, el diseño de esta nueva web ha sido realizado por mi y para el maquetado de la web se ha usado Wordpress y Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "",
		},
		{
			name: "Piedra Papel Tijeras",
			img: "PiedraPapelTijeras.png",
			alt: "Piedra Papel Tijeras",
			miniDescription:
				"Juego Piedra papel tijeras creado con Javascript, toda la lógica se encuentra en el JS, se ha utilziado HTMly un CSS básico, te permite ver cuantas veces has ganado en un Scoreboard",
			stack: ["HTML", "JS", "CSS"],
			link: "https://dhx101.github.io/Telesketch/",
		},
		{
			name: "TeleSketch",
			img: "Telesketch.png",
			alt: "Pizzara Mágica TeleSketch",
			miniDescription:
				"Apliación de TeleSketch, es una pizarra donde puedes pintar haciendo Click y arrastrando, puedes elegir varios colores y cambiar el tamaño del Linenzo, se ha creado usando HTML, Javascript y CSS. Los diferentes grids se generan con JS dandoles un evento, el cual cuando ahcemos click permite pintar y al levantar el click deja de pintar.",
			stack: ["HTML", "JS", "CSS"],
			link: "https://dhx101.github.io/Telesketch/",
		},
		{
			name: "Polaris Landing Page",
			img: "Polaris.png",
			alt: "Polaris",
			miniDescription:
				"Landing Page para Polaris Formula querian una web para posicionar su producto en el mercado Portugués, el diseño y maquetado fueron hechas por mi, el maquetado de la web fue hecha con Wordpress y Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "",
		},
		{
			name: "Ortoinnova",
			img: "Ortoinnova.png",
			alt: "Ortoinnova centro Ortopédico",
			miniDescription:
				"Centro ortopédico de Málaga que necesitaban una nueva web ya que la antigua la perdieron, el diseño y maqueteda fue hecho por mi mediante Wordpress y Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.ortoinnova.com/",
		},
		{
			name: "Fairloc",
			img: "Fairloc.png",
			alt: "Fairloc",
			miniDescription:
				"Agencia de traducción quienes necesitaban una web donde mostrar la información de la empresa, diseñada y maquetada por mi en Wordpress y Elementor",
			stack: ["Wordpress", "Elementor"],
			link: "https://fairloc.com/",
		},
		{
			name: "CMR",
			img: "CMR.png",
			alt: "Comercial Malagueña del Rótulo",
			miniDescription:
				"Comercial Malagueña especializada en la venta de Rótulos Luminosos y materiales de alta calidad, diseñada y maquetada por mi en Wordpress Y Elementor",
			stack: ["Wordpress", "Elementor"],
			link: "https://cmrotulos.com/",
		},
		{
			name: "Maria Rey Estetica",
			img: "Mariareyestetica.png",
			alt: "Maria Rey Estetica Centro Cosmética",
			miniDescription:
				"Centro estética de Marbella, la cliente queria una web donde pudiese vender sus productos, se diseñó y maquetó por mi la web utilizando Wordpress junto a Elementor, la tienda se creó utilizando Woocomerce.",
			stack: ["Wordpress", "Elementor", "Woocomerce"],
			link: "https://www.mariareyestetica.com/",
		},
		{
			name: "Ruabella",
			img: "Ruabella.png",
			alt: "Ruabella Consulting",
			miniDescription:
				"Agencia de promociones inmobiliarias de Málaga, diseñada y maquetada por mi mediante Wordpress y Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "https://ruabella.com/",
		},
		{
			name: "Total Logistic",
			img: "TotalLogistic.png",
			alt: "Web Total Logistic Group",
			miniDescription:
				"Empresa de Logística quienes necesitaban maquetar una web antigua que perdieron, el diseño era antiguo y  maquetada por mi usando Wordpress y Elementor",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.totalproject.site/",
		},
		{
			name: "Distribuciones Disesa",
			img: "Disesa.png",
			alt: "Disesa Costa del Sol",
			miniDescription:
				"Mini Site para la empresa Distribuciones disesa, diseño y maquetado por mi, utilizando Wordpress y Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.disesa.es/",
		},
		{
			name: "Oversattningsbyra Landing Page",
			img: "Oversattningsbyra.png",
			alt: "Landing Page Oversattningsbyra",
			miniDescription:
				"Landing Page para un agencia de traducción Nordica quienes necesitaban maquetar una Landing Page para la clienta, diseño del cliente maquetado por mi en Wordpress y Elementor",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.oversattningsbyra.io/",
		},
		{
			name: "Alhaurín Torre Salud",
			img: "AlhaurinTorreSalud.png",
			alt: "Web Alhaurín Torre Salud, Clínica especializada en Alhaurín de la Torre",
			miniDescription:
				"Web para Clínica especializada en Alhaurín de la Torre, se trata de una web la cual fue diseñada por una diseñadora y maquetada en Wordpress con WP Bakery.",
			stack: ["Wordpress", "WPBakery"],
			link: "https://alhaurintorresalud.es/",
		},
		{
			name: "Jurado Abogados",
			img: "JuradoAbogados.png",
			alt: "Web Jurados Abogados, despacho de abogados en Málaga",
			miniDescription:
				"Web para un despacho de abogados situado en Torre del Mar Málaga, se trata de una web la cual fue diseñada por mi y maquetada en Wordpress con Elementor.",
			stack: ["Wordpress", "Elementor"],
			link: "https://www.juradoabogadosweb.com/",
		},
		{
			name: "Psicología Levy",
			img: "PsicologiaLevy.png",
			alt: "Web Centro de Psicología Levy",
			miniDescription:
				"Centro de Psicología en Málaga centro, necesitaban una web, diseño realizado por una diseñadora maquetado por mi mediante Wordpress y Elementor",
			stack: ["Wordpress", "Elementor"],
			link: "https://psicologialevy.com/",
		},
	]);
}