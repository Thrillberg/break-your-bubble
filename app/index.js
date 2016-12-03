import React from 'react';
import Dashboard from './components/dashboard';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

export default class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <Dashboard/>
      </div>
    )
  }
}

