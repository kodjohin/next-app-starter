import React, { FC, useContext } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import styled from "styled-components";
import Search from "./Search";

const StyledHeader = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	box-shadow: 0 0px 1px 0 var(--sub-color);
	background-color: ${(props) => props.theme.body};

	.header__main {
		transform: translateY(0px);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

		.header__container {
			height: 80px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			@media (min-width: 768px) {
				max-width: 768px;
				margin: auto;
			}
		}
	}
	.transparent {
		background-color: transparent;
		transition: background-color 0.3s ease-out;
		background: none;
	}

	.hide__header {
		top: 0;
		transform: translateY(-80px);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	}
`;

let previousScrollPos: number = 0;
const Header: FC = () => {
	return (
		<StyledHeader>
			<div className="header__main transparent">
				<div className="header__container">
					<Logo />
					<Search />
					<Nav />
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;
