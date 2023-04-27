import { GoTopButton, Copyright } from "@/presentation/components";

export const Footer = () => (
	<footer className="w-full pt-6 sm:pt-11 md:pt-16 lg:pt-21 center--row flex-wrap">
		<div className="flex-1 center--row">
			<Copyright />
		</div>
		<GoTopButton />
	</footer>
);
