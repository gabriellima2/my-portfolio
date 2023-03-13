import { useState } from "react";

interface UseToggleReturn {
	isOpen: boolean;
	handleToggle: () => void;
	handleDisable: () => void;
	handleActive: () => void;
}

export function useToggle(): UseToggleReturn {
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
