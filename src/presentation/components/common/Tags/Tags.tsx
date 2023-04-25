type TagsProps = {
	items: string[];
};

export const Tags = (props: TagsProps) => {
	const { items } = props;
	const itemsLength = items.length - 1;
	return (
		<ul className="flex flex-wrap">
			{items.map((item, i) => (
				<li key={item} className="text-s">
					{item}
					{i < itemsLength && <span className="mx-1">|</span>}
				</li>
			))}
		</ul>
	);
};
