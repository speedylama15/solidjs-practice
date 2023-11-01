const setInitialTheme = () => {
	const checkTheme = localStorage.getItem("theme");

	if (!checkTheme) localStorage.setItem("theme", "dark");

	document.documentElement.setAttribute(
		"data-theme",
		checkTheme ? checkTheme : "dark"
	);
};

setInitialTheme();
