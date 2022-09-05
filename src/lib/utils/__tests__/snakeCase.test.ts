import snakeCase from "../snakeCase";

describe("snakeCase", () => {
	it("given a string it formats it in snake case", () => {
		expect(snakeCase("snake case")).toBe("snake_case");
		expect(snakeCase("Foo Bar")).toBe("foo_bar");
		expect(snakeCase("--FOO-BAR--")).toBe("foo_bar");
	});
});
