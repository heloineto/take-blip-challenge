import getLocaleInfo from "../getLocaleInfo";

describe("getLocaleInfo", () => {
	it("returns locale's info", () => {
		const localeInfo = getLocaleInfo("pt-BR");

		expect(localeInfo).toEqual({
			region: "Brazil - Portuguese (BR)",
			timezone: "(UTC - 03:00) Brasília",
		});
	});

	it("returns default locale info if unknown locale is provided", () => {
		const localeInfo = getLocaleInfo("not a locale");

		expect(localeInfo).toEqual({
			region: "Unknown",
			timezone: "Unknown",
		});
	});
});
