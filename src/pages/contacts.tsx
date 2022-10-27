import type { NextPage } from "next";

import { CustomizedLayout } from "../layouts/CustomizedLayout";

const Contacts: NextPage = () => {
	return (
		<CustomizedLayout showContacts={false}>
			<h1>Contatos</h1>
		</CustomizedLayout>
	);
};

export default Contacts;
