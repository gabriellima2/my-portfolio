type LabelsProps = {
	items: string[];
};

export const Labels = (props: LabelsProps) => {
	const { items } = props;
	return (
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};
