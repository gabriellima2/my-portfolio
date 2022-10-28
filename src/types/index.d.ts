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

export interface ProjectInfo {
	id: string;
	name: string;
	url: string;
	image: {
		url: string;
	};
}

export interface ProjectsData {
	projects: ProjectInfo[];
}

export type UserProjectsResponse = UserProjects | null;

export interface UserInfo extends GithubInfo, Skills {}

export type UserInfoResponse = UserInfo | null;

export interface LayoutProps
	extends WithChildren,
		Pick<UserInteractionsProps, "showContacts"> {
	className?: string;
}
