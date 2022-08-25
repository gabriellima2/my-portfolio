import type { NextPage } from "next";
import { BsDownload } from "react-icons/bs";

import { MainTitle } from "../components/Titles/MainTitle";
import { IconLink } from "../components/Links/IconLink";
import { MainLink } from "../components/Links/MainLink";

import { Default } from "../layouts/Default";

import {
	Content,
	Links,
	Section,
	Subtitle,
	BackgroundDetails,
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
								Desenvolvedor Front-End. Desenvolvo interfaces com tecnologias
								atuais do mercado
							</Subtitle>
							<Links>
								<MainLink title="Entrar em contato" href="#">
									Contatar agora
								</MainLink>
								<IconLink
									href="#"
									title="Baixar arquivo em PDF do currículo"
									icon={{
										element: BsDownload,
										label: "Icone de Download",
									}}
								/>
							</Links>
						</Content>
						<footer></footer>
					</Section>
				</BackgroundDetails>
			</main>
		</Default>
	);
};

export default Home;
