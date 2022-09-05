import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

import { styled } from "../../../stitches.config";

const Button = styled("button", {
	flexCenter: "row",

	position: "fixed",
	right: "40px",
	bottom: "20px",

	padding: "10px",

	color: "$main",
	fontSize: "$font__xLarge",

	background: "linear-gradient(to right bottom, $blue 0%, $pink 100%)",
	borderRadius: "100%",
	border: "none",

	cursor: "pointer",

	defaultTransition: "all",

	"&:hover": {
		background: "none",
		color: "$font",
	},

	variants: {
		show: {
			false: {
				visibility: "hidden",
				opacity: 0,
			},
			true: {
				visibility: "visible",
				opacity: 1,
			},
		},
	},
});

export const TopButton = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	const handleClick = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	useEffect(() => {
		const handleScroll = () => {
			const topDistance = window.scrollY;

			if (topDistance > 0) return setIsScrolling(true);

			setIsScrolling(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Button title="Ir para o topo" onClick={handleClick} show={isScrolling}>
			<BsArrowUp />
		</Button>
	);
};
