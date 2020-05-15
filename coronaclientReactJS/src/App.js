import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Gestion des cas</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Accueil <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cas/liste">Liste</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cas/ajout">Ajout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cas/casbyville">Cas par ville</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
