import React, { Component } from 'react';
import './App.css';
import Cabecera from './comp/Header';
import HomePage from './comp/capas/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Cabecera title={"Esta es la cabecera de la app Lista"}/>
        <HomePage texto="Estas en HomePage"/>
      </div>
      </Router>
    );
  }
}

export default App;
