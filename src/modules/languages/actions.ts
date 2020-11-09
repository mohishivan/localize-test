import { AddLanguageAction, AddLanguagePayload, AddLanguageAttemptPayload, AddLanguageAttemptAction } from './types'
import * as constants from './constants'

export const addLanguage = (payload: AddLanguagePayload) : AddLanguageAction => ({
	type: constants.ADD_LANGUAGE,
	payload
})
export const addLanguageAttempt = (payload: AddLanguageAttemptPayload) : AddLanguageAttemptAction => ({
	type: constants.ADD_LANGUAGE_ATTEMPT,
	payload
})
