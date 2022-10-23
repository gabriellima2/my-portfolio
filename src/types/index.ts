import React, { AnchorHTMLAttributes, ReactNode } from "react";

export type WithChildren<T extends object = object> = {
	children: ReactNode;
} & T;

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type CurrentTheme = "light" | "dark";

export type Component<P = object> = React.ComponentType<P>;
