import {dictationsSagas} from './dictation/sagas';
import {fork} from 'redux-saga/effects';
import {userSagas} from './user/sagas';

export function* rootSaga() {
  yield fork(dictationsSagas);
  yield fork(userSagas);
}
