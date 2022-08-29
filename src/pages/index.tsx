import type { NextPage } from "next";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { SocialNetworks } from "../components/SocialNetworks";
import { MainTitle } from "../components/Titles/MainTitle";
import { MainLink } from "../components/Links";

import { Default } from "../layouts/Default";

import {
	Content,
	Glassmorphism,
	BackgroundDetails,
	SectionFooter,
	Small,
	GradientText,
	Text,
	Hello,
	Section,
} from "../styles/pages/Home";
import { Subtitle } from "../components/Titles/Subtitle";
import { Projects } from "../components/Projects";
import { projects } from "../mocks";

const Home: NextPage = () => {
	return (
		<Default>
			<BackgroundDetails>
				<Glassmorphism>
					<main>
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
							<MainLink title="Precisando de alguém para o seu time?" href="#">
								Contatar agora
							</MainLink>
						</Content>
						<SectionFooter>
							<section>
								<SocialNetworks />
							</section>
							<ScrollIndicator />
						</SectionFooter>
					</main>
				</Glassmorphism>
			</BackgroundDetails>

			<Section id="projects">
				<Subtitle>
					Projetos únicos. Todas as etapas de criação feitas por mim
				</Subtitle>
				<Projects projects={projects} />
			</Section>

			<Section id="contacts"></Section>
		</Default>
	);
};

export default Home;
