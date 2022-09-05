import { IconLink } from "./Links";

import { styled } from "../../stitches.config";
import { contacts } from "../mocks";

interface ContactsProps {
	withDisplay: boolean;
}

const Container = styled("ul", {
	variants: {
		widthDisplay: {
			false: {
				flexCenter: "row",
			},
			true: {
				display: "flex",
				alignItems: "flex-start",
				flexDirection: "column",
				gap: "30px",

				"@bp1": {
					flexDirection: "row",
				},
			},
		},
	},
});

const Contact = styled("li", {
	flexCenter: "column",
});

const Display = styled("p", {
	fontWeight: 600,
	color: "$util__accent",
	fontSize: "$font__xSmall",

	opacity: 0.7,

	"@bp2": {
		fontSize: "$font__small",
	},
});

export const Contacts = (props: ContactsProps) => (
	<Container widthDisplay={props.withDisplay}>
		{contacts.map((contact) => (
			<Contact key={contact.name}>
				<IconLink
					href={contact.value}
					icon={{
						element: contact.icon,
						label: `Link para ${contact.name}`,
					}}
				>
					{props.withDisplay && <Display>{contact.display}</Display>}
				</IconLink>
			</Contact>
		))}
	</Container>
);
