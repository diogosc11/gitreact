import React from 'react';
import Drawer from '../components/Drawer';
import SendGatinhos from '../components/SendGatinhos';
import AdotarGatinhos from '../components/AdotarGatinhos';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Drawer} />
          <Route path='/sendgatinhos' exact component={SendGatinhos} />
          <Route path='/adotargatinhos' exact component={AdotarGatinhos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
