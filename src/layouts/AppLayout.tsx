import { UserInteractions } from "../components/UserInteractions";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { WithChildren } from "../types";

export const AppLayout = ({ children }: WithChildren) => (
	<Layout.Container className="h-screen min-h-full">
		<UserInteractions />
		<Layout.Content>{children}</Layout.Content>

		<Copyright />
	</Layout.Container>
);
