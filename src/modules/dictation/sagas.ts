import {call, put, takeLatest, select} from '@redux-saga/core/effects';
import {SagaIterator} from 'redux-saga';
import {getType} from 'typesafe-actions';
import {fetchDictationsRequest, saveDictationsRequest} from './actions';
import {getDictations} from './connector';
import {Dictation} from './interface';
import {selectUser} from '../user/selectors';
import {User} from '../user/interface';

export function* fetchDictationsSaga(
  action: ReturnType<typeof fetchDictationsRequest>,
): SagaIterator {
  try {
    const user: User = yield select(selectUser);
    if (user) {
      const dictations: Dictation[] = yield call(
        getDictations,
        user.selectedLanguage,
        user.dictationsDifficulties,
      );
      yield put(saveDictationsRequest(dictations));
    }
  } catch (error) {
    console.warn(error);
  }
}

export function* dictationsSagas(): SagaIterator {
  yield takeLatest(getType(fetchDictationsRequest), fetchDictationsSaga);
}
