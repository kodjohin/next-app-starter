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

	.footer__main {
		.footer__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 5px;
			height: 100px;
			gap: 10px;
		}
		.footer__social {
			display: flex;
			list-style: none;
			background-color: #fff;
			flex-wrap: wrap;

			.item {
				padding: 5px 10px;
			}
		}

		small {
			padding: 6px 10px;
			background-color: ${(props) => props.theme.fontColor};
			font-weight: 300;
			color: ${(props) => props.theme.body};
		}
	}
`;

const Footer: FC = () => {
	return (
		<StyledFooter>
			<div className="footer__main">
				<div className="footer__container">
					<Social />
					<small>© website 2022</small>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
