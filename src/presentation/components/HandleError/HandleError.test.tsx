import { render, screen } from "@testing-library/react";
import { HandleError, HandleErrorProps } from "./HandleError";

const DEFAULT_CONTENT = "any_content";
const DEFAULT_ERROR = "any_error";
const renderComponent = (props: Pick<HandleErrorProps, "error">) =>
	render(
		<HandleError error={props.error}>
			<p>{DEFAULT_CONTENT}</p>
		</HandleError>
	);

describe("<HandleError />", () => {
	describe("Render", () => {
		it("should render error correctly when having error", () => {
			renderComponent({ error: DEFAULT_ERROR });

			expect(screen.queryByText(DEFAULT_CONTENT)).not.toBeInTheDocument();
			expect(screen.getByText(DEFAULT_ERROR)).toBeInTheDocument();
		});
		it("should render content correctly when not having error", () => {
			renderComponent({ error: null });

			expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument();
			expect(screen.queryByText(DEFAULT_ERROR)).not.toBeInTheDocument();
		});
	});
});
