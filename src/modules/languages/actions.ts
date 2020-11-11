import {
	FetchLanguagesListAction,
	AddLanguageAction,
	AddLanguagePayload,
	AddLanguageAttemptPayload,
	AddLanguageAttemptAction,
	RemoveLanguagePayload,
	RemoveLanguageAttemptAction,
	PutLanguagesPayload,
	PutLanguagesAction,
} from "./types";
import * as constants from "./constants";

export const fetchLanguages = (): FetchLanguagesListAction => ({
	type: constants.FETCH_LANGUAGES,
});

export const putLanguages = (
	payload: PutLanguagesPayload
): PutLanguagesAction => ({
	type: constants.PUT_LANGUAGES,
	payload,
});
export const addLanguage = (
	payload: AddLanguagePayload
): AddLanguageAction => ({
	type: constants.ADD_LANGUAGE,
	payload,
});
export const addLanguageAttempt = (
	payload: AddLanguageAttemptPayload
): AddLanguageAttemptAction => ({
	type: constants.ADD_LANGUAGE_ATTEMPT,
	payload,
});
export const removeLanguage = (
	payload: RemoveLanguagePayload
): RemoveLanguageAttemptAction => ({
	type: constants.REMOVE_LANGUAGE_ATTEMPT,
	payload,
});
