import { styled } from "../../../stitches.config";

const Container = styled("footer", {
	flexCenter: "row",
	padding: "20px 0px",
});

const Copyright = styled("small", {
	fontWeight: 900,
	fontFamily: "$font__util",
	color: "$font",
	opacity: 0.4,
});

export const Footer = () => (
	<Container>
		<Copyright>Gabriel Lima - {new Date().getFullYear()}</Copyright>
	</Container>
);
