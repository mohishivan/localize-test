import { createSelector } from "reselect";
import { LanguageState } from "./types";

const getList = (languages: LanguageState) => languages.list;

export const getTotalProgress = createSelector([getList], (list) => {
	if (!list) {
		return 0;
	}
	if (Array.isArray(list) && list.length === 0) {
		return 0;
	}
	const totalProgress: number = list.reduce((acc, language) => {
		acc = acc + language.progress;
		return acc;
	}, 0);
	return Math.floor(totalProgress / (list.length || 1));
});
export const getTotalUnverified = createSelector([getList], (list) => {
	if (!list) {
		return 0;
	}
	if (Array.isArray(list) && list.length === 0) {
		return 0;
	}
	const totalUnverified: number = list.reduce((acc, language) => {
		acc = acc + language.unverified;
		return acc;
	}, 0);
	return totalUnverified;
});
