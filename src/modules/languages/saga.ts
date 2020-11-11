import { put, take, fork, select, call, cancelled } from "redux-saga/effects";
import * as Actions from "./actions";
import * as constants from "./constants";
import { AppState } from "../../store";
import * as Api from "./api";

export function* addLanguageWatcher() {
	while (true) {
		const action = yield take(constants.ADD_LANGUAGE);
		yield put(Actions.addLanguageAttempt(action.payload));
	}
}
export function* fetchLanguagesWatcher() {
	while (true) {
		yield take(constants.FETCH_LANGUAGES);
		yield fork(fetchLanguagesWorker);
	}
}
export function* fetchLanguagesWorker() {
	try {
		const authToken: string = yield select(
			(state: AppState) => state.languages.authToken
		);
		const languages = yield call(Api.fetchLanguages, authToken);
		yield put(Actions.putLanguages({ languages }));
		return languages;
	} catch (error) {
		if (error.response.status === 400) {
			// const errors = error.response.data
			// yield put(showToast({ errors }))
		}
		console.log({ errors: error.response.data });
	} finally {
		if (yield cancelled()) {
			// ... put special cancellation handling code here
		}
	}
}
//}}}
