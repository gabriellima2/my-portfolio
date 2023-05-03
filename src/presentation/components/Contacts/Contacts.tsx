import { Contact, ContactProps } from "./components";
import type { IContact } from "@/shared/interfaces/IContact";

type ContactsProps = Pick<ContactProps, "variants"> & {
	contacts: IContact[];
	className?: string;
};

export const Contacts = (props: ContactsProps) => {
	const { contacts, variants = "default", className } = props;
	return (
		<ul className={`flex flex-col gap-6 ${className}`}>
			{contacts.map((contact) => (
				<Contact key={contact.title} variants={variants} {...contact} />
			))}
		</ul>
	);
};
