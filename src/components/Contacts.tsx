import React from "react";

export type ContactsVariants = "Quick" | "Full";

type ContactProps = Omit<typeof contacts[0], "abbreviation"> & {
	text: string;
};

interface ContactsProps extends React.HTMLAttributes<HTMLUListElement> {
	variants: ContactsVariants;
}

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
		abbreviation: "EM",
	},
];

const Contact = ({ href, name, text }: ContactProps) => (
	<li className="w-fit h-fit">
		<a
			href={href}
			title={name.toUpperCase()}
			target="_blank"
			className="uppercase hover:underline"
			rel="noreferrer"
		>
			{text}
		</a>
	</li>
);

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<Contact
				key={index}
				href={contact.href}
				name={contact.name}
				text={props.variants === "Quick" ? contact.abbreviation : contact.name}
			/>
		))}
	</ul>
);

const defaultProps: Pick<ContactsProps, "variants"> = {
	variants: "Quick",
};

Contacts.defaultProps = defaultProps;
