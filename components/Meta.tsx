import { NextSeo } from "next-seo";

const Meta = ({ title = "Site title", description = "", url = "" }) => (
	<>
		<NextSeo
			title={title}
			description={description}
			additionalLinkTags={[
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/ico",
					href: "/favicon.ico",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon.ico",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon.ico",
				},
				{
					rel: "mask-icon",
					href: "/safari-pinned-tab.svg",
					color: "#5bbad5",
				},
				{
					rel: "manifest",
					href: "/site.webmanifest",
				},
			]}
			additionalMetaTags={[
				{
					name: `${title}`,
					content: `${description}`,
				},
				{
					name: "msapplication-TileColor",
					content: "#ffffff",
				},
				{
					name: "theme-color",
					content: "#ffffff",
				},
				{
					httpEquiv: "content-type",
					content: "text/html; charset=utf-8",
				},
			]}
			openGraph={{
				type: "website",
				url: `${url}`,
				title: `${title}`,
				description: `${description}`,
				images: [
					{
						url: `${url}/image.png`,
						width: 800,
						height: 600,
						alt: "An image of something",
					},
				],
			}}
			twitter={{
				handle: "@",
				site: "@",
				cardType: "summary_large_image",
			}}
		/>
	</>
);
export default Meta;
