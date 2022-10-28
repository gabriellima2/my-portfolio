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
	skills: Array<string>;
}

export interface ProjectInfo {
	id: string;
	name: string;
	url: string;
	image: {
		url: string;
	};
}

export type ProjectsInfo = Array<ProjectInfo>;

export type UserProjectsResponse = ProjectsInfo | null;

export interface UserInfo extends GithubInfo, Skills {}

export type UserInfoResponse = UserInfo | null;

export interface LayoutProps
	extends WithChildren,
		Pick<UserInteractionsProps, "showContacts"> {
	className?: string;
}
