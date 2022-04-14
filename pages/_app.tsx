import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AppProvider } from "../context/AppState";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
	const [hasMounted, setHasMounted] = useState(false);
	//To ensure that the rehydrated app matches the original HTML
	//We initialize a piece of state, hasMounted, to false.
	//While it's false, we don't bother rendering the "real" content.
	useEffect(() => {
		setHasMounted(true);
	}, []);
	if (!hasMounted) return null;
	return (
		<AppProvider>
			<DefaultSeo
				titleTemplate="%s |Site title"
				openGraph={{
					type: "website",
					locale: "fr",
					url: "https://website.com/",
				}}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppProvider>
	);
}

export default MyApp;
