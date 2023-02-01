import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
	return (
		<nav>
			<h1> Web App</h1>
			<main>
				<HashLink to={"/#home"}>Home</HashLink>
				<HashLink to={"/contacts"}>Contact</HashLink>
				<HashLink to={"/#about"}>About</HashLink>
				<HashLink to={"/#brands"}>Brands</HashLink>
				<HashLink to={"/services"}>Services</HashLink>
			</main>
		</nav>
	);
};

export default Header;
