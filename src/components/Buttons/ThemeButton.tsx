import { BsFillSunFill } from "react-icons/bs";

import { styled } from "../../../stitches.config";

const Button = styled("button", {
	padding: "10px",

	fontSize: "$font__default",
	color: "$util__accent",

	border: "none",
	borderRadius: "10px",

	variants: {
		isClicked: {
			true: {
				background: "$util__default",
			},
			false: {
				background: "none",
			},
		},
	},
});

const Icon = styled("i", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const ThemeButton = () => (
	<Button isClicked="true">
		<Icon>
			<BsFillSunFill />
		</Icon>
	</Button>
);
