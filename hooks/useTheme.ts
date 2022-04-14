import { useState, useEffect } from "react";

export const useTheme = () => {
	//*********** Define Theme ************************** */
	const [theme, setTheme] = useState(
		typeof window !== "undefined" &&
			JSON.parse(localStorage.getItem("prefers-theme") || "{ }")
	);
	const toggleTheme = (theme: {} | undefined) => setTheme(theme);
	//*********** End Define theme ************************/

	useEffect(() => {
		typeof window !== "undefined" &&
			localStorage.setItem("prefers-theme", JSON.stringify(theme));
	}, [theme]);

	return { theme, toggleTheme };
};
