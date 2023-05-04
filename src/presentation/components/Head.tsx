import NextHead from "next/head";

type HeadProps = {
	description?: string;
	path: string;
	keywords: string;
};

export const Head = (props: HeadProps) => {
	const {
		keywords,
		description = "Me chamo Gabriel e sou um desenvolvedor front-end. Desenvolvo aplicações para plataformas Web e Mobile. Possuo diversos projetos desde pessoais até freelances. Sendo, sites para negócios, sites educacionais e aplicativos. Venha saber mais...",
		path = "Portfólio",
	} = props;
	return (
		<NextHead>
			<meta name="author" content="Gabriel Lima" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<title>{`Gabriel Lima - ${path}`}</title>
		</NextHead>
	);
};
