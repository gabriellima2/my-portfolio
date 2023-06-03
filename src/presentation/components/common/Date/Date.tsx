import { useMemo } from "react";

import { slicePublishedDate } from "@/shared/helpers/slice-published-date";
import { abbrMonthText } from "@/shared/helpers/abbr-month-text";

export type DateProps = {
	date: string;
};

type FormattedDateValue = {
	year: string;
	month: string;
	day: string;
};

export const Date = (props: DateProps) => {
	const { date } = props;
	const formmatedDate = useMemo<FormattedDateValue | null>(() => {
		try {
			const { month, ...rest } = slicePublishedDate(date);
			const abbrMonth = abbrMonthText(month);
			return { ...rest, month: abbrMonth };
		} catch (e) {
			return null;
		}
	}, [date]);

	if (!formmatedDate) return null;
	const { day, month, year } = formmatedDate;
	return <small>{`${day} ${month} ${year}`}</small>;
};
