import type { GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { MainTitle, Subtitle } from "../components/Titles";
import { Error } from "../components/Infra/Error";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { MainLink } from "../components/Links";

import { Default } from "../layouts/Default";

import {
	Content,
	Main,
	SectionFooter,
	Small,
	GradientText,
	Text,
	Hello,
	Section,
	About,
	Conclusion,
} from "../styles/pages/Home";

import { getProjects, ProjectContent } from "../lib/getProjects";
import { TopButton } from "../components/Buttons/TopButton";

interface HomeProps {
	projects: ProjectContent[] | null;
}

const Home: NextPage<HomeProps> = ({ projects }) => {
	return (
		<motion.div
			initial={false}
			animate={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
		>
			<Default>
				<Main>
					<Content>
						<Text>
							<Small>
								<Hello>👋</Hello> Gabriel Lima
							</Small>
							<MainTitle>
								Desenvolvedor Front-End, construindo aplicações com{" "}
								<GradientText>tecnologias atuais</GradientText>
							</MainTitle>
						</Text>
						<MainLink title="Contato rápido" href="#">
							Contatar agora
						</MainLink>
					</Content>
					<SectionFooter>
						<section>
							<Contacts withDisplay={false} />
						</section>
						<ScrollIndicator />
					</SectionFooter>
				</Main>

				<div>
					<TopButton />
					<Section id="projects">
						<Subtitle>
							Projetos únicos. Todas as etapas de criação feitas por mim
						</Subtitle>
						{projects ? <Projects projects={projects} /> : <Error />}
					</Section>

					<motion.div
						initial={false}
						animate={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
					>
						<Section id="contacts">
							<Subtitle>Precisando de um dev? Entre em contato</Subtitle>
							<Conclusion>
								<About>
									Como você viu, gosto de criar projetos únicos que surgem a
									partir das minhas idéias. Para saber mais ou entrar em
									contato, essas são as opções
								</About>
								<Contacts withDisplay={true} />
							</Conclusion>
						</Section>
					</motion.div>
				</div>
			</Default>
		</motion.div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const data = await getProjects();

	return {
		props: {
			projects: data,
		},
	};
};
