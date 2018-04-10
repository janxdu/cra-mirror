import mirror, { connect } from 'mirrorx';
import React from 'react';
import { login } from '../api/userLogin';
import FormsPage from '../page/FormsPage';

mirror.model({
  name: 'forms',
  initialState: {
    userLoginStatus: 'success'
  },
  effects: {
    async login(data) {
      const response = await login(data);
      console.log(response);
    },
  },
});

export default connect(state => {return state.forms;})(FormsPage);
