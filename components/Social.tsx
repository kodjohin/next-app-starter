import React from "react";
import styled from "styled-components";

const StyledSocial = styled.ul`
	list-style: none;
	display: flex;
	li {
		padding: 10px;
	}
`;

const Social = () => {
	return (
		<StyledSocial className="footer__social">
			<li className="item">
				<a
					href="https://www.facebook.com/"
					target="_blank"
					rel="noopener noreferrer"
					title="Facebook"
					className="hidden-text icon icon-social-facebook-white"
				>
					Facebook
				</a>
			</li>
			<li className="item">
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
					title="Instagram"
					className="hidden-text icon icon-social-instagram-white"
				>
					Instagram
				</a>
			</li>
			<li className="item">
				<a
					href="https://www.behance.net/"
					target="_blank"
					rel="noopener noreferrer"
					title="Behance"
					className="hidden-text icon icon-social-behance-white"
				>
					Behance
				</a>
			</li>
			<li className="item">
				<a
					href="https://dribbble.com/"
					target="_blank"
					rel="noopener noreferrer"
					title="Dribbble"
					className="hidden-text icon icon-social-dribbble-white"
				>
					Dribbble
				</a>
			</li>
			<li className="item">
				<a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
					title="Twitter"
					className="hidden-text icon icon-social-twitter-white"
				>
					Twitter
				</a>
			</li>
		</StyledSocial>
	);
};

export default Social;
