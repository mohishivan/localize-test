import { LanguageListItem } from './types'

export const list = [
	{ name: "English", code: "gbr" },
	{ name: "Russian", code: "rus" },
	{ name: "Latvian", code: "lva" },
	{ name: "Estonian", code: "est" },
	{ name: "Chinese", code: "chn" },
	{ name: "Spanish", code: "esp" },
	{ name: "Hindi", code: "ind" },
	{ name: "Italian", code: "ita" },
	{ name: "Macedonian", code: "mkd" },
	{ name: "Arabic", code: "egy" },
	{ name: "Portuguese", code: "prt" },
	{ name: "French", code: "fra" },
];

export const getLanguageList = (): LanguageListItem[] =>
	list.map(({ name, code }) => ({
		name,
		code,
		progress: Math.floor(Math.random() * 90) + 10,
		wordsToDo: Math.floor(Math.random() * 20000),
		unverified: Math.floor(Math.random() * 12000),
	}));
