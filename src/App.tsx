import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DataManagement from "./pages/DataManagement/DataManagement";
import DataDistribution from "./pages/DataDistribution/DataDistribution";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DataManagement />
        </Route>
        <Route path="/distributions">
          <DataDistribution />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
