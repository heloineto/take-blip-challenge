export interface ChatbotType {
	name: string;
	type: string;
	created: string;
}

export interface ChatbotProfile {
	shortName: string;
	description: string;
	image: string;
	updated: string;
	culture: string;
	analytics: {
		user: { total: number; actived: number };
		message: { received: number; sent: number };
	};
	name: string;
	type: string;
	created: string;
}
