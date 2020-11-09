import { AddLanguageAction, AddLanguagePayload } from './types'
import * as constants from './constants'

export const addLanguage = (payload: AddLanguagePayload) : AddLanguageAction => ({
	type: constants.ADD_LANGUAGE_ATTEMPT,
	payload
})
