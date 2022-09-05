import classNames from "../classNames";

describe("classNames", () => {
	it("joins strings together", () => {
		expect(classNames("a", "b", "c")).toBe("a b c");
	});

	it("handles falsy and true values", () => {
		expect(classNames("a", null, undefined, false, true, "b")).toBe("a b");
	});
});
