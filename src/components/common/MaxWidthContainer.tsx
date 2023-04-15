import type { TWithChildren } from "@/@types/TWithChildren";

type MaxWidthContainerProps = TWithChildren;

export const MaxWidthContainer = (props: MaxWidthContainerProps) => {
	const { children } = props;
	return (
		<div className="center--col p-6 sm:p-11 md:p-16 lg:p-21">
			<div className="w-full max-w-[1440px]">{children}</div>
		</div>
	);
};
