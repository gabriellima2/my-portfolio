import type { TWithChildren } from "@/@types/TWithChildren";

type MaxWitdthContainerProps = TWithChildren;

export const MaxWitdthContainer = (props: MaxWitdthContainerProps) => {
	const { children } = props;
	return (
		<div className="center--col">
			<div className="w-full max-w-[1440px]">{children}</div>
		</div>
	);
};
