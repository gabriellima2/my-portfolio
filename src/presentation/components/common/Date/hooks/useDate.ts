import { useMemo } from "react";

import { slicePublishedDate } from "@/shared/helpers/slice-published-date";
import { abbrMonthText } from "@/shared/helpers/abbr-month-text";

export type UseDateParams = {
	date: string;
};

type SlicedFormattedDate = {
	year: string;
	month: string;
	day: string;
};

export function useDate(params: UseDateParams): SlicedFormattedDate | null {
	const { date } = params;
	const slicedFormmatedDate = useMemo<SlicedFormattedDate | null>(() => {
		try {
			const { month, ...rest } = slicePublishedDate(date);
			const abbrMonth = abbrMonthText(month);
			return { ...rest, month: abbrMonth };
		} catch (e) {
			return null;
		}
	}, [date]);
	return slicedFormmatedDate;
}
