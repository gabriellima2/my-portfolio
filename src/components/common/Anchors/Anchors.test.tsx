import type { IAnchor } from "@/interfaces/IAnchor";
import { render, screen } from "@testing-library/react";
import Link from "next/link";

type AnchorsProps = {
	anchors: IAnchor[];
	className?: string;
};

const anchors: IAnchor[] = [{ href: "any_href", title: "any_title" }];
const Anchors = (props: AnchorsProps) => {
	const { anchors, className } = props;
	return (
		<ul className={`${className}`}>
			{anchors.map((anchor, index) => (
				<li key={anchor.title}>
					<Link href={anchor.href} title={`Ir para ${anchor.title}`}>
						<span>{index + 1}</span> {anchor.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

const renderComponent = () => render(<Anchors anchors={anchors} />);

describe("<Anchors />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			anchors.forEach((anchor) => {
				const anchorEl = screen.getByTitle(`Ir para ${anchor.title}`);

				expect(anchorEl).toBeInTheDocument();
				expect(anchorEl).toHaveAttribute("href", anchor.href);
				expect(screen.getByText(anchor.title)).toBeInTheDocument();
			});
		});
	});
});
