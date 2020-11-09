import { put, take } from "redux-saga/effects";
import * as Actions from "./actions";
import * as constants from "./constants";

export function* addLanguageWatcher() {
	while (true) {
		const action = yield take(constants.ADD_LANGUAGE);
		yield put(
			Actions.addLanguage({ language: action.payload.language })
		);
	}
}

