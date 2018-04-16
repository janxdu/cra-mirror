import React from 'react';
import AppModel from './model/AppModel';
import mirror, { render, Router } from './framework/kx-mirrorx';
import registerServiceWorker from './registerServiceWorker';

mirror.defaults({
  historyMode: 'browser',
});

render(
  <Router basename="/">
    <AppModel />
  </Router>
  , document.getElementById('root'),
);


registerServiceWorker();
