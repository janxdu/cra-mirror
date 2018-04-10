import mirror, { actions, connect } from 'mirrorx';
import React from 'react';
import { login } from '../api/userLogin';
import FormsPage from '../page/FormsPage';

mirror.model({
  name: 'forms',
  initialState: {
    userLoginErrorCode: '无',
    userLoginErrorMsg: '无',
  },
  reducers: {
    setUserLoginError(oldState, data) {
      return {
        ...oldState,
        userLoginErrorCode: data.errorCode,
        userLoginErrorMsg: data.errorMsg,
      };
    },
  },
  effects: {
    async login(data) {
      const response = await login(data);
      if (response.errorCode !== 0) {
        actions.forms.setUserLoginError({ errorCode: response.errorCode, errorMsg: response.errorMsg });
      }
    },
  },
});

export default connect(state => {
  return state.forms;
})(FormsPage);
