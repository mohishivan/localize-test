import { all, fork } from 'redux-saga/effects'
import { addLanguageWatcher, fetchLanguagesWatcher } from '../modules/languages/saga'
export function* sagas() {
  yield all([
    fork(addLanguageWatcher),
    fork(fetchLanguagesWatcher),
  ])
}
