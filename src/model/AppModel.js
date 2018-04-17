import React from 'react';
import { withRouter } from 'react-router';
import App from '../App';
import mirror, { actions, connect } from '../framework/kx-mirrorx';

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
});

export default withRouter(connect(state => {
  return state.app;
})(App));
