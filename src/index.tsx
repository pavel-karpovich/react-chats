import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import CatchErrors from './CatchErrors';
import { Provider } from 'react-redux';
import Store from './store/store';
import './config/firebase';
import './css/themes/custom.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CatchErrors>
    <React.StrictMode>
      <HashRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  </CatchErrors>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
