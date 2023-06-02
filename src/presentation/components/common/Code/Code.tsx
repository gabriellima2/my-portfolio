import type { HTMLAttributes } from "react";
import { Prism } from "react-syntax-highlighter";
import {
	vs,
	vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useThemeContext } from "@/shared/contexts/theme-context";
import { ClientOnly } from "@/presentation/hocs";

type CodeProps = HTMLAttributes<HTMLElement> & {
	language?: string;
};

export const Code = ClientOnly((props: CodeProps) => {
	const { language = "ts", children } = props;
	const { currentTheme } = useThemeContext();
	const codeBlockTheme = currentTheme === "dark" ? vscDarkPlus : vs;

	if (!children) return null;
	return (
		<Prism language={language} style={codeBlockTheme}>
			{children.toString()}
		</Prism>
	);
});
