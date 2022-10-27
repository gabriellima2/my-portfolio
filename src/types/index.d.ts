import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { UserInteractionsProps } from "../components/UserInteractions";

export type WithChildren<T extends object = object> = {
	children?: ReactNode;
} & T;

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type CurrentTheme = "light" | "dark";

export type Component<P = object> = React.ComponentType<P>;

export interface GithubInfo {
	avatar_url: string;
	location: string;
}

export interface Skills {
	skills: string[];
}

export interface UserInfo extends GithubInfo, Skills {}

export type UserRequest = UserInfo | null;

export type LayoutProps = WithChildren &
	Pick<UserInteractionsProps, "showContacts">;
