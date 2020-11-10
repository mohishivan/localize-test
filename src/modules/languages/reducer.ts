import { Reducer } from "redux";
import produce from "immer";
import {
	AddLanguageAttemptAction,
	LanguageState,
	LanguageListItem,
	LanguageAction,
	RemoveLanguageAttemptAction,
} from "./types";
import { getLanguageList } from "./fixtures";
import * as constants from "./constants";

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
				draft.list = [...draft.list, ...languages];
			});
		case constants.REMOVE_LANGUAGE_ATTEMPT:
			return produce(state, (draft: LanguageState) => {
				const { name } = (action as RemoveLanguageAttemptAction).payload;
				draft.list = draft.list.filter((l) => l.name !== name);
			});
		default:
			return state;
	}
};
