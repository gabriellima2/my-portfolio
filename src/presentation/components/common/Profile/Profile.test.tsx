import { render, screen } from "@testing-library/react";
import { Profile, ProfileProps } from "./Profile";

const ADDITIONAL_CONTENT = "any_additional";
const DEFAULT_PROPS: ProfileProps = {
	name: "any_name",
	description: "any_description",
	avatarSrc: "/public/any_src",
	additional: () => <p>{ADDITIONAL_CONTENT}</p>,
};

const renderComponent = (props: ProfileProps) => render(<Profile {...props} />);

describe("<Profile />", () => {
	describe("Render", () => {
		it("should render correctly without additional content", () => {
			renderComponent({ ...DEFAULT_PROPS, additional: undefined });

			const { name, description } = DEFAULT_PROPS;

			expect(screen.getByAltText(`Foto de ${name}`)).toBeInTheDocument();
			expect(screen.getByText(name)).toBeInTheDocument();
			expect(screen.getByText(description)).toBeInTheDocument();
			expect(screen.queryByText(ADDITIONAL_CONTENT)).not.toBeInTheDocument();
		});
		it("should render correctly with additional content", () => {
			renderComponent({ ...DEFAULT_PROPS });

			const { name, description } = DEFAULT_PROPS;

			expect(screen.getByAltText(`Foto de ${name}`)).toBeInTheDocument();
			expect(screen.getByText(name)).toBeInTheDocument();
			expect(screen.getByText(description)).toBeInTheDocument();
			expect(screen.getByText(ADDITIONAL_CONTENT)).toBeInTheDocument();
		});
	});
});
