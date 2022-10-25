import type { NextPage } from "next";

import { Navigation } from "../components/Navigation";
import { WithFakeLoading } from "../HOC/WithFakeLoading";

import { AppLayout } from "../layouts/AppLayout";

const Home: NextPage = () => (
	<AppLayout>
		<main className="w-full flex flex-col justify-center gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between lg:p-16 xl:max-w-[1500px]">
			<div>
				<h1 className="uppercase font-bold font-main text-lg sm:text-xl xl:text-2xl">
					Gabriel Lima
				</h1>
				<h2 className="font-main font-normal text-base sm:text-lg xl:text-xl">
					Desenvolvedor Front-end
				</h2>
			</div>
			<section>
				<Navigation />
			</section>
		</main>
	</AppLayout>
);

export default WithFakeLoading(Home);
