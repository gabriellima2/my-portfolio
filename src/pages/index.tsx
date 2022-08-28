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
	Links,
	Subtitle,
} from "../styles/pages/Home";

const Home: NextPage = () => {
	return (
		<Default>
			<BackgroundDetails>
				<Glassmorphism>
					<main>
						<Content>
							<MainTitle>Desenvolvendo interfaces com códigos</MainTitle>
							<Subtitle>
								Sou Gabriel, um desenvolvedor front-end autodidata!
							</Subtitle>
							<Links>
								<MainLink
									title="Precisando de alguém para o seu time?"
									href="#"
								>
									Contatar agora
								</MainLink>
								<TextLink href="#projects">Projetos</TextLink>
							</Links>
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
