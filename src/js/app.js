'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import initStyles from '../css/init.scss';
import styles from '../css/main.scss';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>This is the template of web application.</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.content')
);
