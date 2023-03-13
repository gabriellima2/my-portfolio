import { NavigationBar } from "../components/Navigation";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { LayoutProps } from "../types";

export const DefaultLayout = (props: LayoutProps) => (
	<Layout.Container className={`${props.className} h-screen min-h-full`}>
		<NavigationBar showContacts={props.showContacts} />
		<Layout.Content>{props.children}</Layout.Content>

		<Copyright />
	</Layout.Container>
);

const defaultProps: Pick<LayoutProps, "showContacts"> = {
	showContacts: true,
};

DefaultLayout.defaultProps = defaultProps;
