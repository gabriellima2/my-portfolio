import { IconLink } from "./Links";

import { contacts } from "../mocks";
import { styled } from "../../stitches.config";

const Container = styled("ul", {
	flexCenter: "row",
	gap: "5px",
});

export const SocialNetworks = () => (
	<Container>
		{contacts.socialNetworks.map((socialNetwork) => (
			<li key={socialNetwork.name}>
				<IconLink
					href={socialNetwork.value}
					icon={{
						element: socialNetwork.icon,
						label: `Link para ${socialNetwork.name}`,
					}}
				/>
			</li>
		))}
	</Container>
);
