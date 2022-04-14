import React, { FC, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import NavToggler from "./NavToggler";

const StyledNav = styled.nav`
	animation: 1s fadeIn;

	ul {
		position: absolute;
		top: 0px;
		left: 0;
		background-color: ${(props) => props.theme.body};
		width: 100vw;
		z-index: 10;

		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 20px;

		/* Hide the element content, while height = 0 */
		/* overflow: hidden; */
		height: 0;
		opacity: 0;
		transition: height 0ms 500ms, opacity 500ms 0ms;

		&.open {
			height: 100vh;
			margin: 0;
			padding: 0;
			transition: height 0ms 0ms, opacity 500ms 0ms;
			opacity: 1;
		}
	}
	li {
		padding: 20px 15px;
		color: var(--link);
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
			color: var(--link-hover);
			outline-color: var(--link-hover);
			:after {
				width: 100%;
				transition: all 0.275s cubic-bezier(0.23, 1, 0.32, 1);
				transform: none;
				background: ${(props) => props.theme.fontColor};
				width: 100%;
			}
		}
		&.selected {
			:after {
				width: 100%;
				transition: all 0.275s cubic-bezier(0.23, 1, 0.32, 1);
				transform: none;
				background: ${(props) => props.theme.fontColor};
				width: 100%;
			}
		}
	}
	@media (min-width: 768px) {
		padding-right: 0;
		margin-left: 20px;
		border-radius: 5px;
		.selector {
			order: 3;
			border-radius: 5px;
		}
		ul {
			opacity: 1;
			height: initial;
			z-index: 999;
			position: initial;
			width: auto;
			background-color: ${(props) => props.theme.body};

			list-style: none;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			transform: none;
			padding-bottom: 0;

			&.open {
				height: initial;
				transition: height 0ms 0ms, opacity 500ms 0ms;
			}
		}
		li {
			padding: 10px 15px;
			color: var(--text-color);
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
				color: var(--link-hover);
				outline-color: var(--link-hover);
				:after {
					width: 100%;
					transition: all 0.275s cubic-bezier(0.23, 1, 0.32, 1);
					transform: none;
					background: ${(props) => props.theme.fontColor};
					width: 100%;
				}
			}
			&.selected {
				color: var(--link-hover);
				outline-color: var(--link-hover);
				:after {
					width: 100%;
					transition: all 0.275s cubic-bezier(0.23, 1, 0.32, 1);
					transform: none;
					background: ${(props) => props.theme.fontColor};
					width: 100%;
				}
			}
		}
	}
`;

const Nav: FC = () => {
	const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);
	const [open, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const links = [
		{ path: "products", fr: "produits" },
		{ path: "contact", fr: "contactez-nous" },
	];

	return (
		<StyledNav>
			<NavToggler open={open} setOpen={setOpen} />
			<ul className={open ? "open" : ""}>
				{links.map((link) =>
					router && router.pathname.includes(link.path) ? (
						<li
							className="selected"
							key={link.path}
							onClick={() => setOpen(false)}
						>
							<Link href={`/${link.path}`} as={`/${link.fr}`}>
								<a>{capitalize(link.fr)}</a>
							</Link>
						</li>
					) : (
						<li key={link.path} onClick={() => setOpen(false)}>
							<Link href={`/${link.path}`} as={`/${link.fr}`}>
								<a>{capitalize(link.fr)}</a>
							</Link>
						</li>
					)
				)}
			</ul>
		</StyledNav>
	);
};

export default Nav;
