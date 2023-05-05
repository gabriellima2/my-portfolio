import {
	Article,
	ArticlePreview,
	Avatar,
	Head,
	TextGroup,
	Contacts,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { contacts } from "@/shared/assets";

export default function About() {
	return (
		<>
			<Head
				path="Sobre"
				keywords="Desenvolvedor, Front-end, Criativo, Experiência, Sites, Clientes, Problemas, Design, Codificação, Deploy, Mobile, React Native, ReactJS, Styled-Components, Typescript, Docker, Testes Unitários, Figma, Git, Redux"
				description="Sou um desenvolvedor front-end criativo com experiência em criar sites modernos para clientes que desejam aumentar sua visibilidade online. Gosto de criar projetos pessoais resolvendo problemas que encontro diariamente. Tenho habilidades em design, codificação e deploy das aplicações..."
			/>
			<DefaultLayout>
				<Article className="flex flex-col justify-between gap-21 lg:flex-row lg:items-center">
					<Avatar
						src="/assets/photo.jpg"
						alt="Foto de Gabriel Lima"
						className="lg:order-1"
					/>
					<TextGroup
						title="Gabriel Lima"
						paragraphs={[
							"Sou um desenvolvedor front-end criativo com experiência em criar sites modernos para clientes que desejam aumentar sua visibilidade online. Gosto de criar projetos pessoais resolvendo problemas que encontro diariamente, focando em facilitar a experiência e a vida das pessoas. Tenho habilidades em design, codificação e deploy das aplicações usando tecnologias que englobam o ReactJS e ferramentas de design e hospedagem. Também desenvolvo para plataforma mobile com React Native.",
							"Minha stack se baseia em React com Javascript e Typescript, sendo tecnologias populares, como NextJS, React Native, Redux, Redux-Toolkit, StitchesJS, TailwindCSS e Styled-Components. Além disso, possuo conhecimentos em Testes Unitários, Git, Docker e Figma.",
						]}
					/>
				</Article>
				<ArticlePreview title="Contatos">
					<Contacts contacts={contacts} variants="with-mask" />
				</ArticlePreview>
			</DefaultLayout>
		</>
	);
}
