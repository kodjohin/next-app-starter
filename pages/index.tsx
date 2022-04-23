import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo title="Home" />
			<div className="main">
				<h1>Main content</h1>
			</div>
		</>
	);
};

export default Home;
