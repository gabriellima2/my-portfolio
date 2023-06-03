import { getMonthInTextFormatFromNumber } from "./get-month-in-text-format-from-number";

/**
 *
 * @param month: Month name
 * @param letters: [Optional] Number of letters for the abbreviated month. Default is 3
 * @returns Abbreviated month
 */
export function abbrMonthText(month: string, letters = 3) {
	const abbrMonth = getMonthInTextFormatFromNumber[month].slice(0, letters);
	return abbrMonth;
}
