import {call, put, takeLatest} from '@redux-saga/core/effects';
import {SagaIterator} from 'redux-saga';
import {getType} from 'typesafe-actions';
import {userLoginRequest, saveUserRequest, userSignupRequest} from './actions';
import {getUser} from './connector';
import {Alert} from 'react-native';
import {postUser} from './api';

export function* loginUserSaga(
  action: ReturnType<typeof userLoginRequest>,
): SagaIterator {
  try {
    const user = yield call(getUser, action.payload);
    yield put(saveUserRequest(user));
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
  } catch (error) {
    console.warn(error);
    Alert.alert('Inscription échouée', error.message);
  }
}

export function* userSagas(): SagaIterator {
  yield takeLatest(getType(userLoginRequest), loginUserSaga);
  yield takeLatest(getType(userSignupRequest), signupUserSaga);
}
