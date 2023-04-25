import { ThemeProvider } from "./theme-context";
import type { TWithChildren } from "@/@types/TWithChildren";

export const Providers = (props: TWithChildren) => {
	const { children } = props;
	return (
		<ThemeProvider documentClassName="dark" initialTheme="dark">
			{children}
		</ThemeProvider>
	);
};
