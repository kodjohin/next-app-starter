import React, { FC } from "react";
import styled from "styled-components";
import Social from "./Social";

const StyledFooter = styled.footer`
	width: 100%;
	box-shadow: 0 0px 1px 0 var(--sub-color);
	/* position: fixed; */
	/* bottom: 0; */
	/* left: 0; */
	z-index: 9;
	animation: 1s fadeIn;

	small {
		padding: 6px 10px;
		background-color: ${(props) => props.theme.fontColor};
		font-weight: 300;
		color: #fff;
	}
	.footer__main {
		.footer__container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5px;
			height: 40px;
			gap: 10px;
			@media (min-width: 768px) {
				max-width: 768px;
				margin: auto;
			}
		}
		.footer__social {
			display: flex;
			list-style: none;
			background-color: #fff;
			.item {
				padding: 5px 10px;
				height: 26px;
			}
		}
		:hover {
			.footer__container {
				background-color: ${(props) => props.theme.body};
				color: ${(props) => props.theme.fontColor};
				transition: background-color 0.3s ease-out;
			}
		}
	}
`;

const Footer: FC = () => {
	return (
		<StyledFooter>
			<div className="footer__main">
				<div className="footer__container">
					<small>© website 2022</small>
					<Social />
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
