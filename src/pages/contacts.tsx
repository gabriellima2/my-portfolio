import type { NextPage } from "next";

import { MyContacts } from "../components/MyContacts";
import { CommomLayout } from "../layouts/CommonLayout";

const Contacts: NextPage = () => {
	return (
		<CommomLayout title="Contatos" showContacts={false}>
			<MyContacts.Full />
		</CommomLayout>
	);
};

export default Contacts;
