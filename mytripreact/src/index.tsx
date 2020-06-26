import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRouter from './components/appRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from './auth_config.json';
import { Auth0Provider } from './services/react-auth0-spa';
import history from './utils/history';

const onRedirectCallback = (appState: any) => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };
  let aa: any;
ReactDOM.render(
<Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={() => onRedirectCallback(aa)}
  >
<AppRouter />
</Auth0Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
