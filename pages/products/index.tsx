import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const StyledProducts = styled.div``;

const Index: NextPage = () => {
	return (
		<>
			<NextSeo title="Products" />
			<StyledProducts>
				<h1>Products page</h1>
			</StyledProducts>
		</>
	);
};

export default Index;
