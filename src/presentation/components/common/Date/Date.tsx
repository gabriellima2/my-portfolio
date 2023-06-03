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
	return (
		<span aria-label={label}>
			<small>{`${day} ${month} ${year}`}</small>
		</span>
	);
};
