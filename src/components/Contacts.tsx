import React from "react";
import contacts from "../mocks/contacts.json";

type ContactsProps = React.HTMLAttributes<HTMLUListElement>;

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<li key={index} className="w-fit h-fit">
				<a
					href={contact.href}
					title={contact.name.toUpperCase()}
					className="uppercase hover:underline"
				>
					{contact.abbreviation}
				</a>
			</li>
		))}
	</ul>
);
