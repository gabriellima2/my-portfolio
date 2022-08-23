import { styled } from "../../../stitches.config";

const Area = styled("div", {
	width: "100vw",
	height: "100vh",

	position: "absolute",
	top: 0,
	left: 0,

	background: "$overlay",

	variants: {
		isActive: {
			true: {
				display: "block",
			},
			false: {
				display: "none",
			},
		},
	},
});

interface OverlayProps {
	disableDialog: () => void;
	isActive: boolean;
}

export const Overlay = ({ disableDialog, ...props }: OverlayProps) => (
	<Area onClick={disableDialog} aria-hidden={true} isActive={props.isActive} />
);
