import { CustomizedLayout } from "./CustomizedLayout";
import type { LayoutProps } from "../types";

interface CommonLayoutProps extends LayoutProps {
	title: string;
}

export const CommomLayout = (props: CommonLayoutProps) => (
	<CustomizedLayout
		className={`${props.className} md:h-screen xl:w-screen`}
		showContacts={props.showContacts}
	>
		<main className="flex flex-col gap-16 items-center justify-center pb-6 md:pb-0 lg:gap-2 lg:mt-4 lg:flex-row lg:items-center lg:justify-evenly">
			<h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl lg:order-last">
				{props.title}
			</h1>
			<section className="flex items-center justify-center">
				{props.children}
			</section>
		</main>
	</CustomizedLayout>
);
