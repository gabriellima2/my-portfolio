import type { NextPage } from "next";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { MainTitle, Subtitle } from "../components/Titles";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
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
								<Contacts withDisplay={false} />
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

			<Section id="contacts">
				<Subtitle>Precisando de um dev? Entre em contato</Subtitle>
				<Contacts withDisplay={true} />
			</Section>
		</Default>
	);
};

export default Home;
