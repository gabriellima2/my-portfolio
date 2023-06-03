import { useMemo } from "react";

export type useCalcEstimatedReadingTimeParams = {
	content: string | null;
};

const WORDS_READ_PER_MINUTE = 225;

export function useCalcEstimatedReadingTime(
	params: useCalcEstimatedReadingTimeParams
): number | null {
	const { content } = params;
	const words = useMemo(() => {
		return content ? content.trim().split(/\s+/).length : null;
	}, [content]);
	if (!words) return null;

	const readingTime = Math.ceil(words / WORDS_READ_PER_MINUTE);
	return readingTime;
}
