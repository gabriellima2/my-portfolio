import type { NextPage } from "next";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { SocialNetworks } from "../components/SocialNetworks";
import { MainTitle } from "../components/Titles/MainTitle";
import { MainLink } from "../components/Links/MainLink";
import { TextLink } from "../components/Links/TextLink";

import { Default } from "../layouts/Default";

import {
	Content,
	Glassmorphism,
	BackgroundDetails,
	SectionFooter,
	Links,
} from "../styles/pages/Home";

const Home: NextPage = () => {
	return (
		<Default>
			<BackgroundDetails>
				<Glassmorphism>
					<main>
						<Content>
							<MainTitle>Desenvolvendo interfaces com códigos</MainTitle>
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
		</Default>
	);
};

export default Home;
