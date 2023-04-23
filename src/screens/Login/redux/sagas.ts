import {put, takeLatest} from 'redux-saga/effects';
import IAction from '@redux/interfaces/IAction';
import TYPES from './actionTypes';
import {SagaIterator} from 'redux-saga';
import {loginSetUserData} from './reducer';
/*
 * Authenticate user
 */
export function* login({payload}: IAction<TYPES>): SagaIterator {
  const {data} = payload;
  yield put(loginSetUserData({email: data.email, password: data.password}));
}

export default [takeLatest(TYPES.LOGIN, login)];
