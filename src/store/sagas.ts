import { all, fork } from 'redux-saga/effects'
import { addLanguageWatcher } from '../modules/languages/saga'
export function* sagas() {
  yield all([
    fork(addLanguageWatcher),
  ])
}
