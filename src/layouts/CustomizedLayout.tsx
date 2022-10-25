import { UserInteractions } from "../components/UserInteractions";
import { HomeLink } from "../components/Links/HomeLink";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { WithChildren } from "../types";

export const CustomizedLayout = ({ children }: WithChildren) => (
	<Layout.Container>
		<UserInteractions>
			<HomeLink />
		</UserInteractions>
		<Layout.Content>{children}</Layout.Content>

		<Copyright />
	</Layout.Container>
);
