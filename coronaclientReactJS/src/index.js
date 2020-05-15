import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import AddCas from './components/AddCas';
import ListCas from './components/ListCas';
import CasByVille from './components/CasByVille';
import EditCas from './components/EditCas';
import DeleteCas from './components/DeleteCas';
const routing = (
  <Router>
      <div>
          <Route path="/" component={App} />
          <Route path="/cas/liste" component={ListCas} />
          <Route path="/cas/ajout" component={AddCas} />
          <Route path="/cas/casbyville" component={CasByVille} />
          <Route path="/cas/get/:id" component={EditCas} />
          <Route path="/cas/delete/:id" component={DeleteCas} />
      </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
