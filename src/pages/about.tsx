import type { GetStaticProps, NextPage } from "next";

import { MySkills } from "../components/MySkills";
import { MainLink } from "../components/MainLink";
import { BsArrowRight } from "react-icons/bs";
import { Avatar } from "../components/Avatar";

import { AppLayout } from "../layouts/AppLayout";

import { UserInformation } from "../utils/UserInformation";
import type { UserRequest } from "../types";

interface AboutProps {
	user: UserRequest;
}

const About: NextPage<AboutProps> = ({ user }) => {
	if (!user) return <p>Error</p>;

	return (
		<AppLayout>
			<section className="flex-1 flex flex-col gap-14">
				<div className="flex flex-col gap-4">
					<h1 className="text-8xl">Gabriel Lima</h1>
					<section className="mb-4">
						<p>
							Sou um desenvolvedor Front-end, desenvolvo interfaces para
							Websites e Apps. Autodidata e interessado por Tecnologia e Design
							de Interfaces.
						</p>
						<p>Gosto de desenvolver minhas idéias e criar aplicações únicas.</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-4xl">Habilidades</h2>
						<div>
							<p>
								Atualmente, estou focado nas ferramentas que englobam o React,
								mas sempre que possivel vejo outras para se manter atualizado.
							</p>
							<p>
								Todos esses conhecimentos foram adquiridos de forma autodidata e
								usados em meus projetos.
							</p>
						</div>
						<MySkills skills={user.skills} />
					</section>
				</div>

				<MainLink.Background href="/contacts">
					Contatos
					<i className="text-xl">
						<BsArrowRight />
					</i>
				</MainLink.Background>
			</section>

			<section className="w-1/4">
				<Avatar
					src={user.avatar_url}
					alt="Foto de Gabriel"
					className="w-72 h-72"
					text={user.location}
				/>
			</section>
		</AppLayout>
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
	};
};
