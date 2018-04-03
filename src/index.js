import mirror, { render, Router } from 'mirrorx';
import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

mirror.defaults({
  historyMode: 'hash',
});

render(
  <Router basename="/test" hashType="hashbang">
    <App />
  </Router>
  , document.getElementById('root'),
);
registerServiceWorker();
