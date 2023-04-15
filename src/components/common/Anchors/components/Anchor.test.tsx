import { render, screen } from "@testing-library/react";

import * as router from "next/router";
import Link from "next/link";
import type { IAnchor } from "@/interfaces/IAnchor";
import { vi, Mock } from "vitest";

type AnchorsProps = IAnchor & {
	position: number;
};

export const Anchor = (props: AnchorsProps) => {
	const { href, title, position } = props;
	const { pathname } = router.useRouter();

	const isCurrentPath = pathname === href;

	return (
		<li key={title}>
			<Link
				href={href}
				title={`Ir para ${title}`}
				aria-current={isCurrentPath}
				aria-disabled={isCurrentPath}
				tabIndex={isCurrentPath ? -1 : 0}
			>
				<span>{position}</span> {title}
			</Link>
		</li>
	);
};

vi.spyOn(router, "useRouter");
const useRouterMocked = router.useRouter as Mock;

const DEFAULT_ANCHOR: IAnchor = { href: "any_href", title: "any_title" };
const DEFAULT_ANCHOR_POSITION = 1;

const renderComponent = (props: IAnchor = DEFAULT_ANCHOR) =>
	render(<Anchor {...props} position={DEFAULT_ANCHOR_POSITION} />);

describe("<Anchors />", () => {
	afterEach(() => vi.clearAllMocks());
	describe("Render", () => {
		it("should render correctly with current path", () => {
			useRouterMocked.mockReturnValue({ pathname: "any_href" });
			renderComponent();

			const anchorEl = screen.getByTitle(`Ir para ${DEFAULT_ANCHOR.title}`);

			expect(anchorEl).toBeInTheDocument();
			expect(anchorEl).toHaveAttribute("href", DEFAULT_ANCHOR.href);
			expect(anchorEl).toHaveAttribute("aria-current", "true");
			expect(anchorEl).toHaveAttribute("aria-disabled", "true");
			expect(anchorEl).toHaveAttribute("tabIndex", "-1");
			expect(screen.getByText(DEFAULT_ANCHOR.title)).toBeInTheDocument();
			expect(screen.getByText(DEFAULT_ANCHOR_POSITION)).toBeInTheDocument();
		});
		it("should render correctly with different path", () => {
			useRouterMocked.mockReturnValue({ pathname: "any_href_1" });
			renderComponent();

			const anchorEl = screen.getByTitle(`Ir para ${DEFAULT_ANCHOR.title}`);

			expect(anchorEl).toBeInTheDocument();
			expect(anchorEl).toHaveAttribute("href", DEFAULT_ANCHOR.href);
			expect(anchorEl).toHaveAttribute("aria-current", "false");
			expect(anchorEl).toHaveAttribute("aria-disabled", "false");
			expect(anchorEl).toHaveAttribute("tabIndex", "0");
			expect(screen.getByText(DEFAULT_ANCHOR.title)).toBeInTheDocument();
			expect(screen.getByText(DEFAULT_ANCHOR_POSITION)).toBeInTheDocument();
		});
	});
});
