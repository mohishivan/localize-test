import { AnyAction } from "redux";
import * as constants from "./constants";

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
	authToken: string | null;
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
export interface FetchLanguagesListAction {
	type: typeof constants.FETCH_LANGUAGES;
}
export interface PutLanguagesAction {
	type: typeof constants.PUT_LANGUAGES;
	payload: PutLanguagesPayload;
}
export interface PutLanguagesPayload {
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
export interface RemoveLanguageAction {
	type: typeof constants.REMOVE_LANGUAGE;
	payload: RemoveLanguagePayload;
}
export type LanguageAction =
	| AddLanguageAction
	| RemoveLanguageAction
	| RemoveLanguageAttemptAction
	| AddLanguageAttemptAction
	| AnyAction;
