import React from 'react';
import { withRouter } from 'react-router';
import { take } from 'redux-saga/effects';
import App from '../App';
import mirror, { connect } from '../framework/kx-mirrorx';

mirror.model({
  name: 'app',
  initialState: {
    selectedMenu: 'component',
    selectedSubMenu: '',
    selectedSubMenuItem: '',
  },
  reducers: {
    selectMenu(oldState, data) {
      return {
        ...oldState,
        selectedMenu: data,
      };
    },
  },
  effects: {
    * rootSaga() {
      while (true) {
        const takeData = yield take('forms/login');
        console.log('hello forms/login take end from app');
        console.log('takeData=', takeData);
      }
    }
  },
});

export default withRouter(connect(state => {
  return state.app;
})(App));
