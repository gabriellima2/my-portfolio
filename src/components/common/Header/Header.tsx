import { BaseHeader } from "./BaseHeader";

export const Header = () => {
	return (
		<BaseHeader>
			<button>Tema</button>
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
