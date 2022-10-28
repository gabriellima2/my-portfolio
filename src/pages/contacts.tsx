import type { NextPage } from "next";

import { MyContacts } from "../components/MyContacts";
import { Seo } from "../components/Seo";

import { CommomLayout } from "../layouts/CommonLayout";

const Contacts: NextPage = () => {
	return (
		<CommomLayout title="Contatos" showContacts={false}>
			<Seo title="Gabriel Lima - Contatos" />
			<MyContacts.Full />
		</CommomLayout>
	);
};

export default Contacts;
