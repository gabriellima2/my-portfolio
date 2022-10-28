import type { NextPage } from "next";

import { CommomLayout } from "../layouts/CommonLayout";

const Contacts: NextPage = () => {
	return (
		<CommomLayout
			title="Contatos"
			showContacts={false}
			className="md:h-screen xl:w-screen"
		>
			<p>AQUI</p>
		</CommomLayout>
	);
};

export default Contacts;
