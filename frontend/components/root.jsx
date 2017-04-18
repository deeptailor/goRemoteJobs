import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './main/main.jsx';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Main}></Route>
  </Router>
);

export default Root;
