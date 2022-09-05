import formatDate from "../formatDate";

describe("formatDate", () => {
	it("properly formats dates as MM/DD/YYYY", () => {
		expect(formatDate(new Date(2018, 11, 24))).toBe("12/24/2018");
		expect(formatDate(new Date("October 13, 2014 11:13:00"))).toBe(
			"10/13/2014"
		);
		expect(formatDate(new Date(2018, 10, 4))).toBe("11/04/2018");
	});
});
