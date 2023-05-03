import NextHead from "next/head";

type HeadProps = {
	description: string;
	title?: string;
	path?: string;
	keywords: string;
};

export const Head = (props: HeadProps) => {
	const {
		description,
		keywords,
		path = "Portfólio",
		title = "Gabriel Lima",
	} = props;
	return (
		<NextHead>
			<meta name="author" content="Gabriel Lima" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<title>
				{title} {path && `- ${path}`}
			</title>
		</NextHead>
	);
};
