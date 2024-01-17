import { motion } from "framer-motion";

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
				description="Sou um desenvolvedor inovador e criativo. Tenho experiência em desenvolver soluções digitais únicas e personalizadas. Através do meu trabalho, busco ajudar os clientes a aumentar sua visibilidade e presença no mundo digital. Minha área de atuação se concentra no desenvolvimento front-end de websites e de aplicativos."
			/>
			<DefaultLayout>
				<Article className="flex flex-col justify-between gap-21 lg:flex-row lg:items-center">
					<motion.div
						className="lg:order-1 lg:flex lg:w-full lg:justify-end"
						initial={{ opacity: 0, translateY: 35 }}
						whileInView={{ opacity: 1, translateY: 0 }}
					>
						<Avatar
							src="/assets/photo.jpg"
							alt="Foto de Gabriel Lima"
							placeholder="blur"
							blurDataURL="/assets/cover.png"
						/>
					</motion.div>

					<TextGroup
						title="Gabriel Lima"
						paragraphs={[
							"Sou um desenvolvedor inovador e criativo. Tenho experiência em desenvolver soluções digitais únicas e personalizadas. Através do meu trabalho, busco ajudar os clientes a aumentar sua visibilidade e presença no mundo digital. Minha área de atuação se concentra no desenvolvimento front-end de websites e de aplicativos.",
							"Minha stack de desenvolvimento se baseia em NextJS, ReactJS, React Native, Redux/RTK Toolkit e VueJS. Além disso, tenho um conhecimento considerável em NodeJS. Também tenho experiência em Testes Unitários, usando ferramentas como RTL, Jest e Vitest, no desenvolvimento usando containers com Docker e na criação de interfaces com Figma.",
						]}
					/>
				</Article>
				<ArticlePreview title="Contatos">
					<Contacts contacts={contacts} variants="with-mask" hasAnimation />
				</ArticlePreview>
			</DefaultLayout>
		</>
	);
}
