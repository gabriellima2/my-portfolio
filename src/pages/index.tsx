import type { GetStaticProps, NextPage } from "next";

const Home: NextPage = () => {
	return <h1 className="text-2xl text-yellow-500">Redesign</h1>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
