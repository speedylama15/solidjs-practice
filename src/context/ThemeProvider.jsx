import { useContext, createSignal, createContext } from "solid-js";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [theme, setTheme] = createSignal(localStorage.getItem("theme"));

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(ThemeContext);
};
