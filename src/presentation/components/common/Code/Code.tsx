import type { HTMLAttributes } from "react";
import { Prism } from "react-syntax-highlighter";
import {
	prism,
	nightOwl,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useThemeContext } from "@/shared/contexts/theme-context";
import { ClientOnly } from "@/presentation/hocs";

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
			PreTag={(props) => (
				<pre
					{...props}
					className={`${props.className} rounded-2xl border-2 border-util-secondary bg-util-primary dark:border-util-secondary-dark dark:!bg-util-primary-dark`}
				>
					{props.children}
				</pre>
			)}
			CodeTag={(props) => (
				<code {...props} className={`${props.className} !text-sm`} />
			)}
			wrapLongLines
		>
			{children.toString()}
		</Prism>
	);
});
