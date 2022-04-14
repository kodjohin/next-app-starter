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
		<StyledSocial className="lbk__footer__social">
			<li className="item">
				<a
					href="https://www.facebook.com/lbkconcept"
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
					href="https://www.instagram.com/lbkconcept"
					target="_blank"
					rel="noopener noreferrer"
					title="Instagram"
					className="hidden-text icon icon-social-instagram-white"
				>
					Instagram
				</a>
			</li>
		</StyledSocial>
	);
};

export default Social;
