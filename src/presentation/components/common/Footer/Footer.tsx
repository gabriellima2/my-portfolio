import { GoTopButton, Copyright } from "@/presentation/components";

export const Footer = () => (
	<footer className="center--row w-full flex-wrap pt-6 sm:pt-11 md:pt-16 lg:pt-21">
		<div className="center--row flex-1">
			<Copyright />
		</div>
		<GoTopButton />
	</footer>
);
