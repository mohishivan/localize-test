import { Reducer } from "redux";
import produce from "immer";
import { AddLanguageAction, AddLanguagePayload, LanguageState,LanguageListItem, LanguageAction} from "./types";
import * as constants from "./constants";

const list = [
	{ name: "Latvian", code: "LT" },
	{ name: "Estonian", code: "E" },
	{ name: "Chinese", code: "" },
	{ name: "Spanish", code: "" },
	{ name: "English", code: "" },
	{ name: "Hindi", code: "" },
	{ name: "Arabic", code: "" },
	{ name: "Portuguese", code: "" },
	{ name: "Bengali", code: "" },
	{ name: "Russian", code: "" },
	{ name: "French", code: "" },
];

const getLanguageList = () : LanguageListItem[] =>
	list.map(({ name, code }) => ({
		name,
		code,
		progress: Math.floor(Math.random() * 100),
		wordsToDo: Math.floor(Math.random() * 20000),
		unverified: Math.floor(Math.random() * 12000),
	}));

const initialState: LanguageState = {
	listData: getLanguageList(),
	list: [],
};

export const LanguageReducer: Reducer<LanguageState, LanguageAction> = (
	state: LanguageState = initialState,
	action: LanguageAction
) => {
	switch (action.type) {
		case constants.ADD_LANGUAGE_ATTEMPT:
			return produce(state, (draft: LanguageState) => {
				const { language } = (action as AddLanguageAction).payload;
				draft.list.push(language)
			});
		default:
			return state;
	}
};
