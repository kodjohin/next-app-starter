import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLogo = styled.div`
	padding: 10px;
	margin-right: auto;
	animation: fadeIn 0.5s;
	user-select: none;
	border-radius: 5px;
	box-shadow: 0 0 2px 0 ${(props) => props.theme.fontColor};
	h1 {
		font-size: 1rem;
		margin: 0;
		padding: 0;
		color: ${(props) => props.theme.fontColor};
	}
`;

const Logo = () => {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
	return (
		<StyledLogo>
			<Link href="/">
				<a>
					<h1>LOGO</h1>
				</a>
			</Link>
		</StyledLogo>
	);
};

export default Logo;
