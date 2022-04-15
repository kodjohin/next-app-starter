import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import { useTheme } from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/sc-global";

interface Props {
	children?: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
	const { theme } = useTheme();
	if (theme === undefined) return null;

	// console.count("render layout");
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Meta title="" description="" url="" />
				<div className="prime__container">
					<Header />
					{children}
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
};

export default Layout;
