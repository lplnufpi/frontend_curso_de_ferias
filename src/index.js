import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App';
import AnalisarTexto from './components/AnalisarTexto'
import IncrementarCorpus from './components/IncrementarCorpus'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/analisar_texto" component={AnalisarTexto} />
      <Route path="/incrementar_corpus" component={IncrementarCorpus} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
