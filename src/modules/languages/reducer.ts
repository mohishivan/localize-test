import { Reducer } from "redux";
import produce from "immer";
import { AddLanguageAttemptAction, AddLanguageAttemptPayload, LanguageState,LanguageListItem, LanguageAction} from "./types";
import * as constants from "./constants";

const list = [
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
				const { languages } = (action as AddLanguageAttemptAction).payload;
				draft.list = languages
			});
		default:
			return state;
	}
};
