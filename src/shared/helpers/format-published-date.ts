import { getMonthInTextFormatFromNumber } from "./get-month-in-text-format-from-number";
import { slicePublishedDate } from "./slice-published-date";

/**
 *
 * @param value: Expected format: 2023-12-31
 * @returns Value formatted as: 31 Dez 2023
 */
export function formatPublishedDate(value: string) {
	const { year, month, day } = slicePublishedDate(value);
	const abbrMonthText = getMonthInTextFormatFromNumber[month].slice(0, 3);
	return `${day} ${abbrMonthText} ${year}`;
}
