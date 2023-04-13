import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export async function simulateClick(element: HTMLElement) {
	await act(async () => {
		await userEvent.click(element);
	});
}
