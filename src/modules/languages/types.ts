import { AnyAction } from 'redux'
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

export interface RemoveLanguagePayload {
	name: string;
}
export interface AddLanguagePayload {
	languages: LanguageListItem[];
}
export interface AddLanguageAttemptPayload {
	languages: LanguageListItem[];
}

export interface AddLanguageAction {
	type: typeof constants.ADD_LANGUAGE;
	payload: AddLanguagePayload;
}
export interface AddLanguageAttemptAction {
	type: typeof constants.ADD_LANGUAGE_ATTEMPT;
	payload: AddLanguagePayload;
}
export interface RemoveLanguageAttemptAction {
	type: typeof constants.REMOVE_LANGUAGE_ATTEMPT;
	payload: RemoveLanguagePayload;
}
export type LanguageAction = AddLanguageAction | AddLanguageAttemptAction | AnyAction
