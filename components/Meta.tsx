import { NextSeo } from "next-seo";

const Meta = ({ title = "Site title", description = "" }) => (
	<>
		<NextSeo
			title={title}
			description="A short description goes here."
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
					name: "Lbk concept",
					content:
						"handmade dress modernwax streetwear wax fashion glamour waxaddict africanprint women girly waxprint girlgang afro madeinfrance parisienne blackwomen lbkconcept",
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
				url: "https://lbkconcept.com/",
				title: "LBK Concept",
				description:
					"Univers dédié aux bébés, aux femmes, aux mères et aux parents en pleine conscience",
				images: [
					{
						url: "https://lbkconcept.com/lbkconcept.png",
						width: 800,
						height: 600,
						alt: "baby concept Image",
					},
				],
			}}
			twitter={{
				handle: "@lbkconcept",
				site: "@lbkconcept",
				cardType: "summary_large_image",
			}}
		/>
	</>
);
export default Meta;
