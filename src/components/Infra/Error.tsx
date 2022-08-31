import { styled } from "../../../stitches.config";

const Text = styled("p", {
	fontFamily: "$font__util",

	fontWeight: 500,
	fontSize: "$font__default",
	color: "#E43333",
	textAlign: "center",

	marginTop: "30px",

	"@bp1": {
		marginTop: "60px",
		fontSize: "$font__large",
	},
});

export const Error = () => (
	<Text role="alert">
		😥 Houve algum erro! Você pode me avisar por algum meio de contato
	</Text>
);
