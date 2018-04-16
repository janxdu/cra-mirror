import React from 'react';
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

    selectSubMenu(oldState, data) {
      return {
        ...oldState,
        selectedSubMenu: data,
      };
    },

    selectSubMenuItem(oldState, data) {
      return {
        ...oldState,
        selectedSubMenuItem: data,
      };
    }
  },
});

export default connect(state => {
  return state.app;
})(App);
