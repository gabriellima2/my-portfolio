import type { IContact } from "@/shared/interfaces/IContact";
import { Contact } from "./components";

type ContactsProps = {
	contacts: IContact[];
};

export const Contacts = (props: ContactsProps) => {
	const { contacts } = props;
	return (
		<>
			{contacts.map((contact) => (
				<Contact key={contact.title} {...contact} />
			))}
		</>
	);
};
