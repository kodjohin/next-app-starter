import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import styled from "styled-components";

const StyledContact = styled.div``;

const Index: NextPage = () => {
	return (
		<>
			<NextSeo title="Contact" />
			<StyledContact>
				<h1>Contact page</h1>
			</StyledContact>
		</>
	);
};

export default Index;
