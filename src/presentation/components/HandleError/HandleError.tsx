import { Typography } from "../common";
import type { TWithChildren } from "@/@types/TWithChildren";

export type HandleErrorProps = TWithChildren & {
	error: string | null | undefined;
	className?: string;
};

export const HandleError = (props: HandleErrorProps) => {
	const { error, children, className } = props;
	if (!error) return <>{children}</>;
	return (
		<div className={className}>
			<Typography.Title className="!text-xl">{error}</Typography.Title>
		</div>
	);
};
