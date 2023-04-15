import { ToggleThemeButton } from "../Buttons";
import { BaseHeader } from "./BaseHeader";

export const Header = () => {
	return (
		<BaseHeader>
			<ToggleThemeButton />
			<nav>
				<ul>
					<li>
						<a href="#">Âncora 1</a>
					</li>
					<li>
						<a href="#">Âncora 2</a>
					</li>
					<li>
						<a href="#">Âncora 3</a>
					</li>
					<li>
						<a href="#">Âncora 4</a>
					</li>
				</ul>
			</nav>
		</BaseHeader>
	);
};
