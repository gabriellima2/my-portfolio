import type { GetStaticProps, NextPage } from "next";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { MainLink } from "../components/Links/MainLink";
import { MySkills } from "../components/MySkills";
import { Avatar } from "../components/Avatar";
import { Seo } from "../components/Seo";

import { CustomizedLayout } from "../layouts/CustomizedLayout";

import { UserInformation } from "../utils/UserInformation";
import type { UserInfoResponse } from "../types";

interface AboutProps {
	user: UserInfoResponse;
}

const About: NextPage<AboutProps> = ({ user }) => {
	if (!user) return <p>Error</p>;

	return (
		<CustomizedLayout>
			<Seo title="Gabriel Lima - Sobre" />

			<main className="flex flex-col gap-16 items-center lg:items-start lg:mt-4 lg:gap-0 lg:flex-row lg:justify-evenly">
				<motion.section
					initial={{ translateY: "15px", opacity: 0 }}
					animate={{ translateY: "0px", opacity: 1 }}
					transition={{ duration: 1 }}
					className="flex-1 flex flex-col gap-14 mr-12 order-last lg:order-first"
				>
					<div className="flex flex-col gap-4">
						<h1 className="text-5xl sm:text-6xl md:text-8xl">Gabriel Lima</h1>
						<section className="mb-8 flex flex-col gap-3 max-w-[800px]">
							<p>Trabalho com desenvolvimento de Websites e Apps.</p>
							<p>
								Focado em desenvolvimento Front-end desde 2021. Nesse mesmo ano,
								tive meu primeiro contato com programação. Adquiri muitos
								conhecimentos e experiência desenvolvendo aplicações para
								solucionar diferentes problemas que encontrava no cotidiano.
								Essas aplicações estão listadas na{" "}
								<MainLink.Text
									href="/projects"
									title="Ir para seçao de projetos"
									className="underline"
								>
									Seção de Projetos.
								</MainLink.Text>
							</p>
						</section>

						<section className="flex flex-col gap-4 max-w-[800px]">
							<h2 className="text-3xl md:text-4xl">Habilidades</h2>
							<div className="flex flex-col gap-3">
								<p>
									Eu aprendi essas ferramentas de forma autodidata e todas foram
									usadas em projetos que desenvolvi.
								</p>
							</div>
							<MySkills skills={user.skills} />
						</section>
					</div>

					<MainLink.Background
						href="/contacts"
						title="Ir para seção de contatos"
					>
						Contatos
						<i className="text-xl">
							<BsArrowRight />
						</i>
					</MainLink.Background>
				</motion.section>

				<motion.section
					initial={{ translateY: "-15px", opacity: 0 }}
					animate={{ translateY: "0px", opacity: 1 }}
					transition={{ duration: 1 }}
					className="md:w-1/4"
				>
					<Avatar
						src={user.avatar_url}
						alt="Foto de Gabriel"
						className="w-52 h-52 md:w-72 md:h-72"
						text={user.location}
					/>
				</motion.section>
			</main>
		</CustomizedLayout>
	);
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
	const userInformation = new UserInformation();
	await userInformation.execute();

	return {
		props: {
			user: { ...userInformation.data },
		},
		revalidate: 20,
	};
};
