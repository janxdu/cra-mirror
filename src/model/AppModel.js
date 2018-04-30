import React from 'react';
import { withRouter } from 'react-router';
import { takeEvery } from 'redux-saga/effects';
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
      yield takeEvery('forms/login', function (action) {
        console.log('hello forms/login take end from app');
        console.log('action=', action);
      });
    }
  },
});

export default withRouter(connect(state => {
  return state.app;
})(App));
