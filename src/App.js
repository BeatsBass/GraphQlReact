import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Listar from './componentes/listar'
import Buscar from './componentes/buscar'
import Header from './componentes/header'
import Card from './componentes/card'

function App() {
  return (
    <Router>
       <Header/>
      <Switch>
        <Route exact path='/' component={Listar}/>
        <Route exact path='/n' component={Buscar}/>
      </Switch>
      <Card/>
    </Router>
  );
}

export default App;
