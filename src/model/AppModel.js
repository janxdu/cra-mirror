import React from 'react';
import App from '../App';
import mirror, { connect } from '../framework/kx-mirrorx';

mirror.model({
  name: 'app',
  initialState: {
    selectMenu: 'component',
    selectSubMenu: 'component-common',
    selectSubMenuItem: 'component-common-login',
  },
  reducers: {
    selectMenu(oldState, data) {
      return {
        ...oldState,
        userLoginErrorCode: data.errorCode,
        userLoginErrorMsg: data.errorMsg,
      };
    },

    selectSubMenu(oldState, data) {

    }
  },
});

export default connect(state => {
  return state.app;
})(App);
