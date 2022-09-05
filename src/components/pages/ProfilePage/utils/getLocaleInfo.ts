type LocaleInfo = {
	region: string;
	timezone: string;
};

const localeInfoArray: Record<string, LocaleInfo | undefined> = {
	"pt-BR": {
		region: "Brazil - Portuguese (BR)",
		timezone: "(UTC - 03:00) Brasília",
	},
};

const getLocaleInfo = (locale: string) => {
	const localeInfo = localeInfoArray[locale];

	if (localeInfo === undefined) {
		return {
			region: "Unknown",
			timezone: "Unknown",
		};
	}

	return localeInfo;
};

export default getLocaleInfo;
