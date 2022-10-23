import type { NextPage } from "next";

import { Navigation } from "../components/Navigation";
import { WithFakeLoading } from "../HOC/WithFakeLoading";

import { AppLayout } from "../layouts/AppLayout";

const Home: NextPage = () => (
	<AppLayout>
		<div>
			<h1 className="uppercase font-bold font-main text-xl sm:text-2xl">
				Gabriel Lima
			</h1>
			<h2 className="font-main font-normal text-lg sm:text-xl">
				Desenvolvedor Front-end
			</h2>
		</div>
		<section>
			<Navigation />
		</section>
	</AppLayout>
);

export default WithFakeLoading(Home);
