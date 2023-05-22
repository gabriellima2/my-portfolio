import { Typography } from "../common";
import type { TWithChildren } from "@/@types/TWithChildren";

export type HandleErrorProps = TWithChildren & {
	error: string | null | undefined;
};

export const HandleError = (props: HandleErrorProps) => {
	const { error, children } = props;
	if (!error) return <>{children}</>;
	return <Typography.Title className="!text-xl">{error}</Typography.Title>;
};
