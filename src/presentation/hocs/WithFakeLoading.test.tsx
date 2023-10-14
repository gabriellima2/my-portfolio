import { vi } from "vitest";
import { render, act, screen } from "@testing-library/react";
import { WithFakeLoading } from "./WithFakeLoading";

vi.useFakeTimers();

const LOADING_TEXT = "Carregando...";
const CONTENT_TEXT = "any_content";
const FAKE_COMPONENT = WithFakeLoading(
	() => <p>{CONTENT_TEXT}</p>,
	() => <p>{LOADING_TEXT}</p>
);

const renderComponent = () => render(<FAKE_COMPONENT />);

describe("<WithFakeLoading />", () => {
	it("should render content after loading", () => {
		const { rerender } = renderComponent();

		expect(screen.queryByText(LOADING_TEXT)).toBeInTheDocument();
		expect(screen.queryByText(CONTENT_TEXT)).not.toBeVisible();

		act(() => {
			vi.advanceTimersByTime(2500);
		});

		rerender(<FAKE_COMPONENT />);

		expect(screen.queryByText(LOADING_TEXT)).not.toBeVisible();
		expect(screen.queryByText(CONTENT_TEXT)).toBeInTheDocument();
	});
});
