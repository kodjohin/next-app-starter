import React, { FC } from "react";
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
			.header__nav_search {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		#search {
			position: absolute;
			z-index: 10;
			top: 84px;
			right: 0;
			background-color: whitesmoke;
			padding: 10px;
			width: 100vw;
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
	@media (min-width: 768px) {
		.header__nav_search {
			display: flex;
			justify-content: center;
			align-items: center;
			#search {
				position: initial;
				width: initial;
				background-color: initial;
				padding: 0;
			}
		}
	}
`;

const Header: FC = () => {
	return (
		<StyledHeader>
			<div className="header__main transparent">
				<div className="header__container">
					<Logo />
					<div className="header__nav_search">
						<Search />
						<Nav />
					</div>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;
