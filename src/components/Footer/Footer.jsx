import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div>
				<h1>Web App</h1>
				<p>@all right reserved</p>
			</div>

			<div>
				<h5>Follow Us</h5>
				<div>
					<a href="https://www.instagram.com/ivikaskashyap/" target={"blank"}>
						Instagram
					</a>
					<a href="https://github.com/imvikaskashyap" target={"blank"}>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/vikas-kashyap-bb7a5318b/"
						target={"blank"}>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
