import Calendy from "@/components/Calendy/Calendy";
import LinkIncon from "@/components/LinkIcon/LinkIncon";
import Reloj from "@/components/Reloj/Reloj";
import Year from "@/components/Reloj/Year";
import Image from "next/image";

const Home = () => {
	return (
		<>
			<div className="block me">
				<div className="me-info">
					<div className="me-info-text">
						<p className="me-info-text special gabinet">Bienvenidos</p>
						<div>
							<p>
								Hola, Soy <strong>David Huang Xie</strong>, un Desarrollador Web que le apasionan
								las nuevas tecnologías y el desarrollo de páginas web.
							</p>
							<p>
								Me especializo en <strong>desarrollo web</strong>, tanto a <strong>código</strong>{" "}
								como con <strong>WordPress</strong> y <strong>SEO On-Page</strong>.
							</p>
						</div>
					</div>
					<div className="me-info-socials">
						<a
							href="https://github.com/dhx101"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								id="Bold"
								enable-background="new 0 0 24 24"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg">
								<path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/dhuangxie/"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								height="512"
								viewBox="0 0 176 176"
								width="512"
								xmlns="http://www.w3.org/2000/svg">
								<g
									id="Layer_2"
									data-name="Layer 2">
									<g id="linkedin">
										<path
											id="icon"
											d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"
										/>
									</g>
								</g>
							</svg>
						</a>
						<a
							href="/David/Curriculum ES.pdf"
							download="CV David Huang Xie.pdf"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								height="409.6pt"
								viewBox="0 0 409.6 409.6"
								width="409.6pt"
								xmlns="http://www.w3.org/2000/svg">
								<path d="m375.464844 0h-341.328125c-18.773438 0-34.136719 15.363281-34.136719 34.136719v341.332031c0 18.765625 15.363281 34.132812 34.136719 34.132812h341.332031c18.765625 0 34.132812-15.367187 34.132812-34.136718v-341.328125c0-18.773438-15.367187-34.136719-34.136718-34.136719zm-290.128906 136.535156c0-28.269531 22.929687-51.199218 51.199218-51.199218 28.265625 0 51.199219 22.929687 51.199219 51.199218h-34.132813c0-9.429687-7.644531-17.066406-17.066406-17.066406s-17.066406 7.636719-17.066406 17.066406v68.25c0 9.414063 7.640625 17.0625 17.066406 17.0625 9.425782 0 17.066406-7.648437 17.066406-17.0625h34.132813c0 28.28125-22.933594 51.199219-51.199219 51.199219-28.269531 0-51.199218-22.921875-51.199218-51.199219zm238.929687 187.730469h-238.929687v-34.128906h238.933593v34.128906zm-42.664063-68.265625h-34.136718l-42.664063-170.664062h35.183594l24.550781 98.199218 24.550782-98.199218h35.179687zm0 0" />
							</svg>
						</a>
						<a
							href="mailto:dhuangxie@gmail.com"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								id="Layer_18"
								enable-background="new 0 0 2000 2000"
								viewBox="0 0 2000 2000"
								xmlns="http://www.w3.org/2000/svg">
								<path d="m1999.999 732.153c-.118-30.48-34.211-48.676-60.12-32.62l-911.801 565.059c-8.599 5.33-18.338 7.995-28.077 7.995s-19.478-2.665-28.076-7.995l-911.804-565.06c-25.909-16.056-60.001 2.139-60.12 32.62 0 .223-.001.446-.001.67v972.928c0 94.2 76.364 170.564 170.564 170.564h1658.872c94.2 0 170.564-76.364 170.564-170.564v-972.928c0-.223-.001-.446-.001-.669zm-1809.256-77.087 789.603 489.333c12.04 7.462 27.268 7.462 39.308 0l789.602-489.329c12.546-7.775 20.179-21.485 20.179-36.245v-409.856c0-47.1-38.182-85.282-85.282-85.282h-1488.307c-47.1 0-85.282 38.182-85.282 85.282v409.852c0 14.76 7.633 28.47 20.179 36.245zm494.034-318.174h630.445c27.511 0 49.815 22.304 49.815 49.814s-22.304 49.814-49.815 49.814h-630.445c-27.51 0-49.814-22.304-49.814-49.814s22.304-49.814 49.814-49.814zm0 232.467h630.445c27.511 0 49.815 22.304 49.815 49.814s-22.304 49.815-49.815 49.815h-630.445c-27.51 0-49.814-22.305-49.814-49.815s22.304-49.814 49.814-49.814z" />
							</svg>
						</a>

						<Calendy />
					</div>
				</div>
				<div className="me-photo">
					<Image
						src="/David/David.png"
						height="200"
						width="200"
						alt="David"
					/>
				</div>
			</div>

			<div className="block about-me">
				<h2 className="title-gabinet">Sobre mí</h2>
				<div className="satoshi-light">
					<p>Buenas, soy David, un Desarrollador Front End de España.</p>
					<ul>
						<li>Javascript</li>
						<li>React</li>
						<li>Nextjs</li>
						<li>Node.js</li>
						<li>WordPress</li>
						<li>Elementor</li>
						<li>WP Bakery</li>
						<li>SeRanking</li>
						<li>G4 y SC</li>
					</ul>
					<p>
						Aparte de desarrollar páginas webs, soy un apasionado de los videojuegos, el gimnasio y
						viajar por el mundo. También me gusta cocinar, aunque limpiar los trastos no tanto.
					</p>
					<p>
						Aunque tengo preferencia por ciertas herramientas de trabajo, siempre me adapto a las
						necesidades del cliente para elegir la mejor solución para cada proyecto.
					</p>
				</div>
			</div>
			<div className="block contact">
				<h2 className="title-gabinet">¡Trabajemos juntos!</h2>
				<div>
					<p className="gabinet details">Detalles de contacto</p>
					<p>dhuangxie@gmail.com</p>
					<p>España</p>
				</div>
				<div>
					<p className="gabinet details">Socials</p>
					<a
						href="https://www.linkedin.com/in/dhuangxie/"
						target="_blank"
						rel="noopener noreferrer">
						Linkedin
					</a>
					<a
						href="https://github.com/dhx101"
						target="_blank"
						rel="noopener noreferrer">
						Github
					</a>
				</div>
			</div>
			<Reloj />
			<a
				href="/estudios"
				className="block estudios">
				<h2 className="title-gabinet">Estudios</h2>
				<LinkIncon />
			</a>
			<a
				href="/proyectos"
				className="block proyectos">
				<h2 className="title-gabinet">Proyectos</h2>
				<div>
					<p>Descubre mis proyectos</p>
					<LinkIncon />
				</div>
			</a>
			<div className="block actualidad">
				<h2 className="gabinet">Ahora</h2>
				<p className="special">¿Qué hago?</p>
				<p>Trabajo como desarrollador web en Almoraima Soluciones</p>
			</div>
			<div className="block experiencia">
				<h2 className="tittle-gabinet">Experiencia</h2>
				<LinkIncon />
			</div>
			<div className="block footer">
				<p>
					&#169; <Year /> | Creado con &#128151; y esmero con React y NextJs, por David Huang Xie
				</p>
			</div>
			<div id="root"></div>
		</>
	);
};

export default Home;
