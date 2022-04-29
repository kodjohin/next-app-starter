import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const StyledHome = styled.div``;

const Home: NextPage = () => {
	return (
		<>
			<NextSeo title="Home" />
			<StyledHome>
				<h1>Main content</h1>
			</StyledHome>
		</>
	);
};

export default Home;
