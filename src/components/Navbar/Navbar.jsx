import { A } from "@solidjs/router";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav class="navbar">
			<A class="navbar_logo" href="/">
				SolidApp
			</A>

			<div class="navbar_interactives">
				<A href="/login">Login</A>

				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
