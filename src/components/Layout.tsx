import type { WithChildren } from "../types";

interface ContainerProps extends WithChildren {
	className?: string;
}

const Container = (props: ContainerProps) => (
	<div
		className={`${props.className} flex flex-col gap-12 md:gap-0 md:flex-row overflow-x-hidden`}
	>
		{props.children}
	</div>
);

const Content = ({ children }: WithChildren) => (
	<div className="w-screen flex justify-center md:items-center">
		<div className="w-full p-8 md:p-12 md:pl-24 xl:max-w-[1500px]">
			{children}
		</div>
	</div>
);

export const Layout = { Container, Content };
