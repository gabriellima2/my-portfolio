import React from "react";

type ListItemProps = React.LinkHTMLAttributes<HTMLLIElement>;

export const ListItem = (props: ListItemProps) => {
	const { className, ...rest } = props;
	return <li {...rest} className={`${className} ml-5 list-disc pb-6`} />;
};
