import { useContext } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

import { ClientOnly } from "../../HOC/ClientOnly";

import { ThemeContext } from "../../contexts/ThemeContext";

export const ThemeButton = ClientOnly(() => {
	const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

	const IconTheme = currentTheme === "dark" ? BsFillSunFill : BsMoonFill;

	return (
		<button
			type="button"
			title="Mudar tema"
			onClick={changeCurrentTheme}
			className="bg-none border-none w-fit h-fit text-font dark:text-fontDark"
		>
			<i className="text-fontMain">
				<IconTheme />
			</i>
		</button>
	);
});
