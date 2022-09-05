import getColor from "../getColor";

const reHexColor = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

describe("getColor", () => {
	it("given a string, it returns a hex color", () => {
		expect(getColor("foo")).toMatch(reHexColor);
		expect(getColor("bar")).toMatch(reHexColor);
		expect(getColor("baz")).toMatch(reHexColor);
	});
});
