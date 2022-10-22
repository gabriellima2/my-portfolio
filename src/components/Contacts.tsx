import React from "react";

interface ContactsProps extends React.HTMLAttributes<HTMLUListElement> {}

const contacts = [
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/gabriel-lima-860612236",
		abbreviation: "in",
	},
	{
		name: "github",
		href: "https://github.com/gabriellima2",
		abbreviation: "gh",
	},
	{
		name: "email",
		href: "mailto:gabriel.rslima10@gmail.com",
	},
];

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<li key={index} className="w-fit h-fit">
				<a
					href={contact.href}
					title={contact.name.toUpperCase()}
					target="_blank"
					className="uppercase hover:underline"
					rel="noreferrer"
				>
					{contact.abbreviation}
				</a>
			</li>
		))}
	</ul>
);
