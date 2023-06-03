import { useMemo } from "react";
import { ClientOnly } from "@/presentation/hocs";

export type EstimatedReadingTimeProps = {
	articleId: string;
};

const WORDS_READ_PER_MINUTE = 225;

export const EstimatedReadingTime = ClientOnly(
	(props: EstimatedReadingTimeProps) => {
		const { articleId } = props;
		const article = document.getElementById(articleId);

		const words = useMemo(() => {
			const articleContent = article?.textContent;
			return articleContent ? articleContent.trim().split(/\s+/).length : null;
		}, [article]);

		if (!article || !words) return null;
		const time = Math.ceil(words / WORDS_READ_PER_MINUTE);

		return (
			<span aria-label="Tempo de leitura estimado">
				<small>{time}</small>
			</span>
		);
	}
);
