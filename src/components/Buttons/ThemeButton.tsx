import { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";

import { ClientOnly } from "../../HOC/ClientOnly";

import { styled } from "../../../stitches.config";
import { ThemeContext } from "../../contexts/ThemeContext";

const Button = styled("button", {
	padding: "10px",

	fontSize: "$font__default",
	color: "$util__accent",

	border: "none",
	borderRadius: "10px",
	cursor: "pointer",

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

export const ThemeButton = ClientOnly(() => {
	const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

	return (
		<Button isClicked={currentTheme === "light"} onClick={changeCurrentTheme}>
			<Icon>
				<BsFillSunFill />
			</Icon>
		</Button>
	);
});
