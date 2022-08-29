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
				flexCenter: "column",
				justifyContent: "center",
				gap: "60px",

				margin: "40px 0px 10px 0px",

				"@bp2": {
					flexDirection: "row",
					justifyContent: "space-evenly",
					gap: "5px",
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
	fontSize: "$font__2xSmall",

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
						size: props.withDisplay ? "2.3rem" : undefined,
					}}
				/>
				{props.withDisplay && <Display>{contact.display}</Display>}
			</Contact>
		))}
	</Container>
);
