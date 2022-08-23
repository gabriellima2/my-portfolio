import { ReactNode } from "react";

export type WithChildren<T extends object = object> = {
	children: ReactNode;
} & T;
