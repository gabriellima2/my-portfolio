import type { IContact } from "@/shared/interfaces/IContact";
import { Contact, ContactProps } from "./components";

type ContactsProps = Pick<ContactProps, "variants"> & {
	contacts: IContact[];
};

export const Contacts = (props: ContactsProps) => {
	const { contacts, variants = "default" } = props;
	return (
		<>
			{contacts.map((contact) => (
				<Contact key={contact.title} variants={variants} {...contact} />
			))}
		</>
	);
};
