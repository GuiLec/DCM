import {call, put, takeLatest, select} from '@redux-saga/core/effects';
import {SagaIterator} from 'redux-saga';
import {getType} from 'typesafe-actions';
import {fetchDictationsRequest, saveDictationsRequest} from './actions';
import {getDictations} from './connector';
import {Dictation} from './interface';
import {selectUser} from '../user/selectors';
import {User} from '../user/interface';
import {apiCallStart, apiCallSuccess, apiCallError} from '../loader/actions';

export function* fetchDictationsSaga(
  action: ReturnType<typeof fetchDictationsRequest>,
): SagaIterator {
  try {
    const user: User = yield select(selectUser);
    if (user) {
      yield put(apiCallStart('FETCH_DICTATIONS'));
      const dictations: Dictation[] = yield call(
        getDictations,
        user.selectedLanguage,
        user.dictationsDifficulties,
      );
      yield put(saveDictationsRequest(dictations));
      yield put(apiCallSuccess('FETCH_DICTATIONS'));
    }
  } catch (error) {
    yield put(apiCallError('FETCH_DICTATIONS', error));
    console.warn(error);
  }
}

export function* dictationsSagas(): SagaIterator {
  yield takeLatest(getType(fetchDictationsRequest), fetchDictationsSaga);
}
