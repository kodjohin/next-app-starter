import React, { FC } from "react";
import Meta from "./Meta";
interface Props {
	children?: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Meta
				title="Site title"
				description="A short or long description for seo"
				url="https://site.com"
			/>
			{children}
		</>
	);
};

export default Layout;
