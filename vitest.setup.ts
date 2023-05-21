import "@testing-library/jest-dom/extend-expect";

import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;
