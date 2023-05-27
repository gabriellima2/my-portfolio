import { getMonthInTextFormatFromNumber } from "./get-month-in-text-format-from-number";

/**
 *
 * @param value: Expected format: 2023-12-31
 * @returns Value formatted as: 31 Dez 2023
 */
export function formatPublishedDate(value: string) {
	if (!value.includes("-")) throw new Error("Invalid date format");
	const lastSeparatorIndex = value.lastIndexOf("-");
	const [year, month, day] = value.slice(0, lastSeparatorIndex + 3).split("-");
	const abbrMonthText = getMonthInTextFormatFromNumber[month].slice(0, 3);
	return `${day} ${abbrMonthText} ${year}`;
}
