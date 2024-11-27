"use client";
import React, { useEffect, useState } from "react";

const Reloj = () => {
	const [hora, setHora] = useState("00:00");
	const [segundos, setSegundos] = useState("00");
	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			const hora = date.getHours();
			const min = date.getMinutes();
			const sec = date.getSeconds();

			const horas = hora.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			const minutos = min.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			const segundos = sec.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

			const horaActual = `${horas}:${minutos}`;
			const segActual = `${segundos}`;
			setHora(horaActual);
			setSegundos(segActual);
		}, 1000);
	});

	return (
		<div className="block reloj">
			<p>{hora}</p> <span className="segundos">{segundos}</span>
		</div>
	);
};

export default Reloj;
