import { useThemeContext } from "../../context/ThemeProvider";

import "./ThemeToggle.css";

const ThemeToggle = () => {
	const { theme, setTheme } = useThemeContext();

	const handleThemeOnClick = () => {
		const switchTheme = theme() === "light" ? "dark" : "light";
		setTheme(switchTheme);
		document.documentElement.setAttribute("data-theme", switchTheme);
		localStorage.setItem("theme", switchTheme);
	};

	return (
		<div class="theme-toggle" onClick={handleThemeOnClick}>
			<button
				class="theme-toggle_button"
				classList={{
					"active-theme": theme() === "light",
					"hidden-theme": theme() !== "light",
				}}
			/>

			<button
				class="theme-toggle_button"
				classList={{
					"active-theme": theme() === "dark",
					"hidden-theme": theme() !== "dark",
				}}
			/>
		</div>
	);
};

export default ThemeToggle;
