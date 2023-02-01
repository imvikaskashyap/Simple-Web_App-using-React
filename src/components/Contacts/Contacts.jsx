import React from "react";
import "./Contacts.scss";

const Contacts = () => {
	return (
		<div className="contacts">
			<main>
				<h1>Contact Us</h1>

				<form>
					<div>
						<label>Name</label>
						<input type="text" required placeholder="Vercena" />
					</div>
					<div>
						<label>Email</label>
						<input type="email" required placeholder="vercena@xyz.com" />
					</div>
					<div>
						<label>Message</label>
						<input
							type="text"
							required
							placeholder="Tell us about your query..."
						/>
					</div>
					<button type="submit">Send</button>
				</form>
			</main>
		</div>
	);
};

export default Contacts;
