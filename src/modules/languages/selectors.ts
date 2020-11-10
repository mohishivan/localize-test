import { createSelector } from "reselect";
import { AppState } from "../../store";

const getList = (state: AppState) => state.languages.list;

export const getTotalProgress = createSelector([getList], (list) => {
	if (list.length === 0) {
		return 0;
	}
	const totalProgress: number = list.reduce((acc, language) => {
		acc = acc + language.progress;
		return acc;
	}, 0);
	return Math.floor(totalProgress / (list.length || 1));
});
export const getTotalUnverified = createSelector([getList], (list) => {
	const totalUnverified: number = list.reduce((acc, language) => {
		acc = acc + language.unverified;
		return acc;
	}, 0);
	return totalUnverified;
});
