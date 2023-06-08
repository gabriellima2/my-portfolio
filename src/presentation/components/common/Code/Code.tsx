import type { HTMLAttributes } from "react";
import { Prism } from "react-syntax-highlighter";
import {
	prism,
	nightOwl,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useThemeContext } from "@/shared/contexts/theme-context";

import { ClientOnly } from "@/presentation/hocs";
import { Pre, CodeLine } from "./components";

type CodeProps = HTMLAttributes<HTMLElement> & {
	language?: string;
};

export const Code = ClientOnly((props: CodeProps) => {
	const { language = "ts", children } = props;
	const { currentTheme } = useThemeContext();
	const isDarkTheme = currentTheme === "dark";
	const codeBlockTheme = isDarkTheme ? nightOwl : prism;

	if (!children) return null;
	return (
		<Prism
			language={language}
			style={codeBlockTheme}
			PreTag={Pre}
			CodeTag={CodeLine}
			wrapLongLines
		>
			{children.toString()}
		</Prism>
	);
});
