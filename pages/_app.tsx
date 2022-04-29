import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AppProvider } from "../context/AppState";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/sc-global";
import { defaultTheme } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
	const [hasMounted, setHasMounted] = useState(false);
	//To ensure that the rehydrated app matches the original HTML
	//We initialize a piece of state, hasMounted, to false.
	//While it's false, we don't bother rendering the "real" content.
	useEffect(() => {
		setHasMounted(true);
	}, []);
	if (!hasMounted) return <Layout>{null}</Layout>;

	return (
		<AppProvider>
			<DefaultSeo
				titleTemplate="%s | Site title"
				openGraph={{
					type: "website",
					locale: "fr",
					url: "https://website.com/",
				}}
			/>

			<Layout>
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles />
					<Header />
					<Main>
						<Component {...pageProps} />
					</Main>
					<Footer />
				</ThemeProvider>
			</Layout>
		</AppProvider>
	);
}

export default MyApp;
