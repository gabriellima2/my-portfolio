import { useDate } from "./hooks";

export type DateProps = {
	date: string;
	label: string;
};

export const Date = (props: DateProps) => {
	const { date, label } = props;
	const formmatedDate = useDate({ date });
	if (!formmatedDate) return null;

	const { day, month, year } = formmatedDate;
	return <small aria-label={label}>{`${day} ${month} ${year}`}</small>;
};
