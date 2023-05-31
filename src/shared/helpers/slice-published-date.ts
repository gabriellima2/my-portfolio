/**
 *
 * @param value: Expected format: 2023-12-31
 * @returns Sliced date: { year: 2023, month: 12, day: 31 }
 */
export function slicePublishedDate(date: string) {
	if (!date.includes("-")) throw new Error("Invalid date format");
	const lastSeparatorIndex = date.lastIndexOf("-");
	const [year, month, day] = date.slice(0, lastSeparatorIndex + 3).split("-");
	return { year, month, day };
}
