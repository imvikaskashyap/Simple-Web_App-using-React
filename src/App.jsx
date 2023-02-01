import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import "./styles/mediaQuery.scss";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
