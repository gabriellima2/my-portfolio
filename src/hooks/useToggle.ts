import { useState } from "react";

export function useToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => setIsOpen((prevState) => !prevState);

	const handleDisable = () => setIsOpen(false);

	const handleActive = () => setIsOpen(true);

	return {
		isOpen,
		handleToggle,
		handleDisable,
		handleActive,
	};
}
