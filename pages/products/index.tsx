import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Index: NextPage = () => {
	return (
		<>
			<NextSeo title="Products" />
			<div className="main">
				<h1>Products page</h1>
			</div>
		</>
	);
};

export default Index;
