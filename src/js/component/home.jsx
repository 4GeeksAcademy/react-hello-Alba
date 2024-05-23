import React from "react";
import reactDom from "react-dom";
import Navbar from "./Navbar.jsx";
import Botron from "./Botron.jsx";
import Card from "./Card.jsx"
//import "./index.css";
//import Add from "./App.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import App from "./App.jsx";

//create your first component
const Home = () => {
	const imgs = ['https://www.itespresso.es/wp-content/uploads/2021/10/top-lenguajes-programacion-2021.jpg', 'https://tse3.mm.bing.net/th?id=OIP.EijUlLL3m6h_ZaZnulOYnQHaEK&pid=Api&P=0&h=180', 'https://www.ingenierobinario.com/wp-content/uploads/2020/06/LenguajesProg.jpg', 'https://tse1.mm.bing.net/th?id=OIP.2U1j-DF6LO6MYnw3kfXPywHaD8&pid=Api&P=0&h=180', 'https://www.azulweb.net/wp-content/uploads/2019/06/Cursos-Gratuitos-De-Programaci%C3%B3n.png'];
	const parrafo = ['En esencia, son enfoques diferentes para programar diseñados para resolver problemas específicos.', 'Programar viene a ser el proceso de crear un software fiable mediante la escritura, prueba, depuración, compilación o interpretación, y mantenimiento del código fuente ', 'Conoce qué son los lenguajes de programación y cuáles son los más populares entre los desarrolladores.', 'En un día típico, un programador puede estar involucrado en muchos proyectos de codificación diferentes, entre los más importantes encontramos:'];
	const linkn = ['https://tecnobits.com/que-es-programar/', 'https://platzi.com/blog/paradigmas-programacion/', 'https://ebac.mx/blog/lenguaje-de-programacion', 'https://www.nextu.com/blog/que-es-programacion-rc22/'];

	return (
		<>
			<Navbar brandName="4Geeks Academy" pageName="inicio" />

			<App>
				<Botron />
			</App>
			<div className="row">

				<div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
					<Card id="car1" img={imgs[4]} title="Programación" parrafo={parrafo[1]} linkn={linkn[0]} />
				</div>

				<div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
					<Card id="car2" img={imgs[1]} title="Paradigmas de programación" parrafo={parrafo[0]} linkn={linkn[1]} />

				</div>
				<div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">

					<Card id="car3" img={imgs[0]} title="Lenguajes más populares" parrafo={parrafo[2]} linkn={linkn[2]} />
				</div>
				<div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">

					<Card id="car4" img={imgs[3]} title="¿Cómo funciona esta actividad profesional?" parrafo={parrafo[3]} linkn={linkn[3]} />
				</div>

			</div>
		</>
	);
};

export default Home;

