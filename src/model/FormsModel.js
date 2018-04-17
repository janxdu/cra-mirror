import React from 'react';
import { call } from 'redux-saga/effects';
import { login as loginApi } from '../api/userLogin';
import mirror, { actions, connect } from '../framework/kx-mirrorx';
import FormsPage from '../page/FormsPage';

mirror.model({
  name: 'forms',
  initialState: {
    userLoginErrorCode: '无',
    userLoginErrorMsg: '无',
    userInfo: {},
  },
  reducers: {
    setUserLoginError(oldState, data) {
      return {
        ...oldState,
        userLoginErrorCode: data.errorCode,
        userLoginErrorMsg: data.errorMsg,
      };
    },
    setUserLoginSuccess(oldState, data) {
      return {
        ...oldState,
        userLoginErrorCode: data.errorCode,
        userInfo: data.result.userInfo,
      };
    },
  },
  effects: {
    async login(data) {
      const response = await loginApi(data);
      console.log('response=', response);
      if (response.errorCode !== 0) {
        actions.forms.setUserLoginError({ errorCode: response.errorCode, errorMsg: response.errorMsg });
      } else {
        actions.forms.setUserLoginSuccess({ errorCode: response.errorCode, result: response.result });
      }
    },

    * loginSaga(data) {
      const response = yield call(loginApi, data);
      console.log('response=', response);
      if (response.errorCode !== 0) {
        actions.forms.setUserLoginError({ errorCode: response.errorCode, errorMsg: response.errorMsg });
      } else {
        actions.forms.setUserLoginSuccess({ errorCode: response.errorCode, result: response.result });
      }
    },
  },
});

export default connect(state => {
  return {
    userInfo: state.forms.userInfo,
    userLoginErrorCode: state.forms.userLoginErrorCode,
    userLoginErrorMsg: state.forms.userLoginErrorMsg,
    loginSpin: state.loading.effects.forms.login,
    loginSagaSpin: state.loading.effects.forms.loginSaga,
  };
})(FormsPage);
