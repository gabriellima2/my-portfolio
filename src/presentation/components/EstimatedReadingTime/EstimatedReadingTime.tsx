import { ClientOnly } from "@/presentation/hocs";
import { useCalcEstimatedReadingTime } from "./hooks";

export type EstimatedReadingTimeProps = {
	articleId: string;
};

export const EstimatedReadingTime = ClientOnly(
	(props: EstimatedReadingTimeProps) => {
		const { articleId } = props;
		const readingTime = useCalcEstimatedReadingTime({
			content: document.getElementById(articleId)?.textContent || null,
		});
		if (!readingTime) return null;

		return (
			<span aria-label="Tempo de leitura estimado">
				<small>{readingTime} Min. de leitura</small>
			</span>
		);
	}
);
