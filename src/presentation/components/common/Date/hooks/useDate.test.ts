import { renderHook } from "@testing-library/react";
import { useDate, UseDateParams } from "./useDate";

const UNFORMMATED_DATE = "2023-06-17";
const INVALID_DATE_FORMAT = "2023, 06, 17";

const execute = (params: UseDateParams) => renderHook(() => useDate(params));

describe("useDate", () => {
	it("should return initial value type correctly", () => {
		const { result } = execute({ date: UNFORMMATED_DATE });
		expect(typeof result.current).toBe("object");
	});
	it("should return formatted date value", () => {
		const { result } = execute({ date: UNFORMMATED_DATE });
		expect(result.current).toMatchObject({
			year: "2023",
			month: "Jun",
			day: "17",
		});
	});
	it("should return null when passed invalid date format", () => {
		const { result } = execute({ date: INVALID_DATE_FORMAT });
		expect(result.current).toBeNull();
	});
});
