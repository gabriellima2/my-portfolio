import { WithChildren } from "../types";

import { Footer } from "../components/Infra/Footer";
import { Header } from "../components/Infra/Header";

export const Default = ({ children }: WithChildren) => (
	<>
		<Header />
		<>{children}</>
		<Footer />
	</>
);
