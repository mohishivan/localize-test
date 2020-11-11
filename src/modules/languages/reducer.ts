import { Reducer } from "redux";
import produce from "immer";
import {
	AddLanguageAttemptAction,
	LanguageState,
	LanguageAction,
	RemoveLanguageAttemptAction,
	PutLanguagesAction,
} from "./types";
import * as constants from "./constants";

const initialState: LanguageState = {
	listData: [],
	list: [],
	authToken: "token",
};

export const LanguageReducer: Reducer<LanguageState, LanguageAction> = (
	state: LanguageState = initialState,
	action: LanguageAction
) => {
	switch (action.type) {
		case constants.ADD_LANGUAGE_ATTEMPT:
			return produce(state, (draft: LanguageState) => {
				const { languages } = (action as AddLanguageAttemptAction).payload;
				draft.list = [...draft.list, ...languages];
			});
		case constants.REMOVE_LANGUAGE_ATTEMPT:
			return produce(state, (draft: LanguageState) => {
				const { name } = (action as RemoveLanguageAttemptAction).payload;
				draft.list = draft.list.filter((l) => l.name !== name);
			});
		case constants.PUT_LANGUAGES:
			return produce(state, (draft: LanguageState) => {
				const { languages } = (action as PutLanguagesAction).payload;
				draft.listData = languages;
			});
		default:
			return state;
	}
};
