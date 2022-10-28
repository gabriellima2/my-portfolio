import React from "react";

import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { contacts } from "../../mocks/contacts";

import type { MockContactType } from "../../types";
import type { MyContactsProps } from ".";
import { MainLink } from "../Links/MainLink";

const Item = ({ href, name, value }: Omit<MockContactType, "abbreviation">) => {
	const nameCapitalized = capitalizeFirstLetter(name);
	const isEmail = name.toLowerCase() === "email";

	return (
		<li>
			{isEmail && <span className="opacity-60">{nameCapitalized}: </span>}
			<MainLink.Text
				href={href}
				target="_blank"
				rel="noreferrer"
				title={nameCapitalized}
				className="text-lg"
			>
				{isEmail ? value : <span className="mr-2">{nameCapitalized}</span>}
			</MainLink.Text>
		</li>
	);
};

export const Full = React.memo((props: MyContactsProps) => (
	<ul {...props} className="w-72 flex flex-wrap">
		{contacts.map((contact, index) => (
			<Item
				key={index}
				href={contact.href}
				name={contact.name}
				value={contact.value}
			/>
		))}
	</ul>
));

Full.displayName = "Full";
