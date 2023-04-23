import {createSlice} from '@reduxjs/toolkit';
import ILoginState from '../interfaces/ILoginState';

export const initialState: ILoginState = {
  user: {
    email: '',
    password: '',
  },
};

export const newUserSlice = createSlice({
  name: 'newUserSlice',
  initialState,
  reducers: {
    loginSetUserData(state, action) {
      state.user = action.payload.user;
    },
  },
});

const {actions} = newUserSlice;
export const {loginSetUserData} = actions;
