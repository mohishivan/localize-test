import { getLanguageList } from "./fixtures";

export const fetchLanguages = (authToken: string) => {
	const list = getLanguageList();
	return list;
};
