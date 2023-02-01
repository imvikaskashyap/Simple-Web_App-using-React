import React from "react";
import "./Home.scss";
import vg from "../../assets/2.webp";
import {
	AiFillGoogleCircle,
	AiFillAmazonCircle,
	AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
	return (
		<>
			<div className="home" id="home">
				<main>
					<h1>Web App</h1>
					<p>Solution to all your Problems</p>
				</main>
			</div>
			<div className="home2">
				<img src={vg} alt="Graphics" />
				<div>
					<p>
						We are one and only solution to the tech proplems you face everyday.
						We are leading tech company whose aim is to increase the problem
						solving ability in children.
					</p>
				</div>
			</div>

			<div className="home3" id="about">
				<div>
					<h1>Who we are ?</h1>
					<p>
						We are a software company that specializes in providing custom
						software solutions to businesses of all sizes. Our team of
						experienced developers and designers have the knowledge and
						expertise to create innovative solutions that meet your specific
						needs. We understand the importance of staying up-to-date with the
						latest technology, and our team is constantly researching and
						developing new ways to make our software more efficient and
						effective. Our goal is to provide you with a comprehensive suite of
						products that will help you achieve your goals and objectives. We
						strive to provide you with the best customer service possible, so if
						you ever have any questions or concerns, please don't hesitate to
						contact us.
					</p>
				</div>
			</div>

			<div className="home4" id="brands">
				<div>
					<h1>Brands</h1>

					<article>
						<div style={{ animationDelay: "0.3s" }}>
							<AiFillGoogleCircle />
							<p>Google</p>
						</div>
						<div style={{ animationDelay: "0.5s" }}>
							<AiFillAmazonCircle />
							<p>Amazon</p>
						</div>
						<div style={{ animationDelay: "0.7s" }}>
							<AiFillInstagram />
							<p>Instagram</p>
						</div>
						<div style={{ animationDelay: "0.1s" }}>
							<AiFillYoutube />
							<p>YouTube</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
