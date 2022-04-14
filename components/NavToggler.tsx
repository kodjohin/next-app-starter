import { FC } from "react";
import styled from "styled-components";

const StyledToggler = styled.div`
	order: -1;
	margin-right: 0;
	display: block;
	position: relative;
	left: 20px;
	z-index: 20;
	user-select: none;
	color: var(--very-vark-blue);
	background-color: hsl(235, 21%, 11%);
	padding: 10px;
	margin-right: 20px;

	input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;
		cursor: pointer;
		opacity: 0; /* hide this */
		z-index: 999; /* and place it over the hamburger */

		-webkit-touch-callout: none;

		/* 
			* Transform all the slices of hamburger
			* into a crossmark.
			*/
		:checked ~ span {
			opacity: 1;
			transform: rotate(45deg) translate(-4px, -8px);
			background: #fff;
		}
		/*
			* But let's hide the middle one.
			*/
		:checked ~ span:nth-last-child(3) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}
		/*
			* Ohyeah and the last one should go the other direction
			*/
		:checked ~ span:nth-last-child(2) {
			transform: rotate(-45deg) translate(-3px, 8px);
		}

		/*
			* And let's slide it in from the left
			*/
		:checked ~ ul {
			/* transform: none; */
			/* background-color: hsl(235, 21%, 11%); */
		}
	}

	span {
		width: 20px;
		height: 2px;
		display: block;
		margin-bottom: 3px;
		position: relative;
		border-radius: 3px;
		z-index: 1;
		background: #fff;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}
	span:first-child {
		transform-origin: 0% 0%;
	}
	span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;
interface Props {
	open: boolean;
	setOpen: (value: boolean) => void;
}
const NavToggler: FC<Props> = ({ open, setOpen }) => {
	return (
		<StyledToggler>
			<input type="checkbox" onChange={() => setOpen(!open)} checked={open} />
			<span></span>
			<span></span>
			<span></span>
		</StyledToggler>
	);
};

export default NavToggler;
