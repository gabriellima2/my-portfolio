import Head from "next/head";

interface SeoProps {
	title: string;
}

export const Seo = (props: SeoProps) => (
	<Head>
		<meta
			name="description"
			content="Gabriel Lima, desenvolvedor front-end e o novo integrante da sua equipe de desenvolvimento. Veja meus projetos e se gostar entre em contato"
		/>
		<title>{props.title}</title>
	</Head>
);
