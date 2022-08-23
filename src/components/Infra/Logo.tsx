import Image from "next/image";
import Link from "next/link";

import { styled } from "../../../stitches.config";

const Responsive = styled("div", {
	width: "40px",
	height: "40px",

	position: "relative",
});

export const Logo = () => (
	<Link href="/">
		<a>
			<Responsive>
				<Image
					src="/light-theme-logo.svg"
					alt="Logo com GL, iniciais de Gabriel Lima"
					layout="fill"
				/>
			</Responsive>
		</a>
	</Link>
);
