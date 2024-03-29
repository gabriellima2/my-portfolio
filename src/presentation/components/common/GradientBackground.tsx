import type { TWithChildren } from "@/@types/TWithChildren";

type GradientBackgroundProps = TWithChildren;

export const GradientBackground = (props: GradientBackgroundProps) => {
	const { children } = props;
	return (
		<div className="bg-gradient bg-cover bg-fixed bg-no-repeat dark:bg-gradient-dark">
			{children}
		</div>
	);
};
