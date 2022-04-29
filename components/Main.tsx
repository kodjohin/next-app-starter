import React, { FC } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

interface Props {
	children?: React.ReactNode;
}
const Main: FC<Props> = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

export default Main;
