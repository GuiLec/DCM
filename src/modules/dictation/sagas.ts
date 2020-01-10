import {call, put, takeLatest} from '@redux-saga/core/effects';
import {SagaIterator} from 'redux-saga';
import {getType} from 'typesafe-actions';
import {fetchDictationsRequest, saveDictationsRequest} from './actions';
import {getDictations} from './connector';

export function* fetchDictationsSaga(
  action: ReturnType<typeof fetchDictationsRequest>,
): SagaIterator {
  try {
    const dictations = yield call(getDictations);
    yield put(saveDictationsRequest(dictations));
  } catch (error) {
    console.warn(error);
  }
}

export function* dictationsSagas(): SagaIterator {
  yield takeLatest(getType(fetchDictationsRequest), fetchDictationsSaga);
}
