import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { AppLayout } from "../layouts/AppLayout";
import { UserRequest } from "../types";
import { UserInformation } from "../utils/UserInformation";

interface AboutProps {
	user: UserRequest;
}

const About: NextPage<AboutProps> = ({ user }) => {
	if (!user) return <p>Error</p>;

	return (
		<AppLayout>
			<section>
				<h1>Gabriel Lima</h1>
				<section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</p>
				</section>
				<section>
					<h2>Habilidades</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</p>
					<ul>
						{user.skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</section>
				<section>
					<h2>Para saber mais, acesse:</h2>
					<div>
						<a href="#">CV</a>
						<Link href="/contacts">Contatar</Link>
					</div>
				</section>
			</section>
			<Image src={user.avatar_url} width={100} height={100} alt="" />
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
