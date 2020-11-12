import { all, fork } from 'redux-saga/effects';
import { addLanguageWatcher, fetchLanguagesWatcher } from '../modules/languages/saga';

// eslint-disable-next-line
export function* sagas() {
    yield all([fork(addLanguageWatcher), fork(fetchLanguagesWatcher)]);
}
