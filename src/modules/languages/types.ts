import * as constants from './constants'

export interface LanguageListItem {
	name: string;
	code: string;
	progress: number;
	wordsToDo: number;
	unverified: number;
}
export interface LanguageState {
	listData: LanguageListItem[];
	list: LanguageListItem[];
}

export interface AddLanguagePayload {
	language: LanguageListItem;
}

export interface AddLanguageAction {
	type: typeof constants.ADD_LANGUAGE;
	payload: AddLanguagePayload;
}
export interface AddLanguageActionAttempt {
	type: typeof constants.ADD_LANGUAGE_ATTEMPT;
	payload: AddLanguagePayload;
}
export type LanguageAction = AddLanguageAction
