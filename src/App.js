import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Listar from './componentes/listar'
import Buscar from './componentes/buscar'
import Header from './componentes/header'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
      <h4>Musicas</h4>
        <Switch>
          <div class="cuerpo">
            <Route exact path='/' component={Listar} />
          </div>
          <Route exact path='/buscar' component={Buscar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
