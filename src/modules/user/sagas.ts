import {call, put, takeLatest, select} from '@redux-saga/core/effects';
import {SagaIterator} from 'redux-saga';
import {getType} from 'typesafe-actions';
import {
  userLoginRequest,
  saveUserRequest,
  userSignupRequest,
  updateDictationsHistoryRequest,
  saveDictationEventAction,
  updateUserRequest,
} from './actions';
import {getUser} from './connector';
import {Alert} from 'react-native';
import {postUser, updateUser} from './api';
import {selectUser} from './selectors';
import {User} from './interface';
import {fetchDictationsRequest} from '../dictation/actions';

export function* loginUserSaga(
  action: ReturnType<typeof userLoginRequest>,
): SagaIterator {
  try {
    const user = yield call(getUser, action.payload);
    yield put(saveUserRequest(user));
    yield put(fetchDictationsRequest());
  } catch (error) {
    console.warn(error);
    Alert.alert('Login échoué', error.message);
  }
}

export function* signupUserSaga(
  action: ReturnType<typeof userSignupRequest>,
): SagaIterator {
  try {
    yield call(postUser, action.payload);
    yield put(saveUserRequest(action.payload));
    yield put(fetchDictationsRequest());
  } catch (error) {
    console.warn(error);
    Alert.alert('Inscription échouée', error.message);
  }
}

export function* updateDictationsHistorySaga(
  action: ReturnType<typeof updateDictationsHistoryRequest>,
): SagaIterator {
  try {
    const user: User | null = yield select(selectUser);
    if (user) {
      const newUser: User = {
        ...user,
        dictationsHistory: [...user.dictationsHistory, action.payload],
      };
      yield call(updateUser, newUser);
    }
  } catch (error) {
    console.warn(error);
  }
  yield put(saveDictationEventAction(action.payload));
}

export function* updateUserSaga(
  action: ReturnType<typeof updateUserRequest>,
): SagaIterator {
  try {
    if (action.payload) yield call(updateUser, action.payload);
  } catch (error) {
    console.warn(error);
  }
  yield put(saveUserRequest(action.payload));
}

export function* userSagas(): SagaIterator {
  yield takeLatest(getType(userLoginRequest), loginUserSaga);
  yield takeLatest(getType(userSignupRequest), signupUserSaga);
  yield takeLatest(getType(updateUserRequest), updateUserSaga);
  yield takeLatest(
    getType(updateDictationsHistoryRequest),
    updateDictationsHistorySaga,
  );
}
