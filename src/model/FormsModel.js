import mirror, { actions, connect } from 'mirrorx';
import React from 'react';
import { login } from '../api/userLogin';
import FormsPage from '../page/FormsPage';

mirror.model({
  name: 'forms',
  initialState: {
    userLoginStatus: 'success'
  },
  reducers: {
    updateUserLoginStatus(state, loginStatus) {
      state.userLoginStatus = loginStatus;
      return state;
    },
  },
  effects: {
    async login(data) {
      const response = await login(data);
      if (response.errorCode !== 0) {
        actions.forms.updateUserLoginStatus('failed');
      }
    },
  },
});

export default connect(state => {
  return { userLoginStatus: state.forms.userLoginStatus };
})(FormsPage);
