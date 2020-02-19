import React from 'react';
import Drawer from '../components/Drawer';
import SendGatinhos from '../components/SendGatinhos';
import AdotarGatinhos from '../components/AdotarGatinhos';
import Onibus from '../components/Onibus';
import EmailGatinhos from '../components/EmailGatinhos';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      <div className="App">
      <Router>
          <Switch>
            <Route path='/' exact component={Drawer} />
            <Route path='/SendGatinhos' exact component={SendGatinhos} />
            <Route path='/AdotarGatinhos' exact component={AdotarGatinhos} />
            <Route path='/Onibus' exact component={Onibus} />
            <Route path='/EmailGatinhos' exact component={EmailGatinhos} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
