import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { styled } from "../../../stitches.config";
import { ThemeContext } from "../../contexts/ThemeContext";

const Responsive = styled("div", {
	width: "40px",
	height: "40px",

	zIndex: 10000,
	position: "relative",
});

export const Logo = () => {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<Link href="/">
			<a>
				<Responsive>
					<Image
						src={`/${currentTheme}-theme-logo.svg`}
						alt="Logo com GL, iniciais de Gabriel Lima"
						layout="fill"
					/>
				</Responsive>
			</a>
		</Link>
	);
};
