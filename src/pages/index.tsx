import type { NextPage } from "next";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { SocialNetworks } from "../components/SocialNetworks";
import { MainTitle } from "../components/Titles/MainTitle";
import { MainLink, TextLink } from "../components/Links";

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
} from "../styles/pages/Home";

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

			<section id="projects"></section>

			<section id="contacts"></section>
		</Default>
	);
};

export default Home;
