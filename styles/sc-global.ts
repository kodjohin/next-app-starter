import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};
	color:  ${(props) => props.theme.fontColor};
}
.link {
		padding: 10px;
		color: #48565e;
		cursor: pointer;
		font-weight: 300;
		font-size: 0.9em;
		position: relative;

		:after {
			transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			transform: translate3d(calc(-100% - 8px), 0, 0);
			background: ${(props) => props.theme.fontColor};
			position: absolute;
			content: "";
			bottom: -5px;
			height: 1px;
			width: 0px;
			left: 0px;
		}
		:active,
		:focus,
		:hover {
			:after {
				width: 100%;
				transition: all 0.275s cubic-bezier(0.23, 1, 0.32, 1);
				transform: none;
				background: ${(props) => props.theme.fontColor};
				width: 100%;
			}
			a{
				color: #9ea4a7;
				outline-color: #9ea4a7;
			}
		}
	}

`;
