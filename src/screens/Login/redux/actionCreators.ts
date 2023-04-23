import IAction from '@redux/interfaces/IAction';
import TYPES from './actionTypes';
import ILoginArguments from '../interfaces/ILoginArguments';

/**
 * Begin authenticate
 */
export const loginAction = (data: ILoginArguments): IAction<TYPES> => ({
  type: TYPES.LOGIN,
  payload: {data},
});
