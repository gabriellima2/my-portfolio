import { renderHook } from "@testing-library/react";
import {
	useCalcEstimatedReadingTime,
	useCalcEstimatedReadingTimeParams,
} from ".";

const FILLED_CONTENT = "Hello World";
const EMPTY_CONTENT = "";

const execute = (params: useCalcEstimatedReadingTimeParams) =>
	renderHook(() => useCalcEstimatedReadingTime(params));

describe("useCalcEstimatedReadingTime", () => {
	it("should return initial value type correctly", () => {
		const { result } = execute({ content: FILLED_CONTENT });
		expect(typeof result.current).toBe("number");
	});
	it("should return null when content is empty", () => {
		const { result } = execute({ content: EMPTY_CONTENT });
		expect(result.current).toBeNull();
	});
	it("should return reading time", () => {
		const { result } = execute({ content: FILLED_CONTENT });
		expect(typeof result.current).toBe("number");
	});
});
