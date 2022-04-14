import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledLogo = styled.div`
	padding: 10px 0;
`;

const Logo: FC = () => {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
	return (
		<StyledLogo>
			<Link href="/">
				<a>
					<Image
						src={`${prefix}/vercel.svg`}
						alt="website"
						width={150}
						height={80}
					/>
				</a>
			</Link>
		</StyledLogo>
	);
};

export default Logo;
