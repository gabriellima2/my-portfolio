type LabelsProps = {
	labels: string[];
};

export const Labels = (props: LabelsProps) => {
	const { labels } = props;
	return (
		<ul>
			{labels.map((label) => (
				<li key={label}>{label}</li>
			))}
		</ul>
	);
};
