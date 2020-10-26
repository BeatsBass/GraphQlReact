import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Listar from './componentes/listar'
import ListarA from './componentes/listarA'
/* import Buscar from './componentes/buscar' */
import Header from './componentes/header'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <h4>Musicas</h4>
        <div className="cuerpo">
          <Switch>
          <Route exact path='/' component={Listar} />
            <Route exact path='/listarN' component={Listar} />
            <Route exact path='/listarA' component={ListarA} />
            {/* <Route exact path='/buscar' component={Buscar} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
