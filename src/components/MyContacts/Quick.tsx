import React from "react";

import { contacts } from "../../mocks/contacts";
import type { MockContactType } from "../../types";
import type { MyContactsProps } from ".";

const Item = ({ href, abbreviation, name }: Omit<MockContactType, "value">) => (
	<li>
		<a href={href} target="_blank" rel="noreferrer" title={name} className="hover:line-through focus:line-through">
			{abbreviation.toUpperCase()}
		</a>
	</li>
);

export const Quick = React.memo((props: MyContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<Item
				key={index}
				href={contact.href}
				name={contact.name}
				abbreviation={contact.abbreviation}
			/>
		))}
	</ul>
));

Quick.displayName = "Quick";
