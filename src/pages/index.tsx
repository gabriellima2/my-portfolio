import type { NextPage } from "next";

import { ScrollIndicator } from "../components/ScrollIndicator";
import { SocialNetworks } from "../components/SocialNetworks";
import { MainTitle } from "../components/Titles/MainTitle";
import { MainLink } from "../components/Links/MainLink";

import { Default } from "../layouts/Default";

import {
	Content,
	Section,
	Subtitle,
	BackgroundDetails,
	SectionFooter,
} from "../styles/pages/Home";

const Home: NextPage = () => {
	return (
		<Default>
			<main>
				<BackgroundDetails>
					<Section>
						<Content>
							<MainTitle>Gabriel Lima</MainTitle>
							<Subtitle>
								Desenvolvedor Front-End. A primeira impressão é a que fica, por
								isso uma boa interface é importante!
							</Subtitle>
							<MainLink title="Entrar em contato" href="#">
								Contatar agora
							</MainLink>
						</Content>
						<SectionFooter>
							<section>
								<SocialNetworks />
							</section>
							<ScrollIndicator />
						</SectionFooter>
					</Section>
				</BackgroundDetails>
			</main>
		</Default>
	);
};

export default Home;
