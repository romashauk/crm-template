import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage/index';
import BuisnessManagement from '../pages/BuisnessManagement';
import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Support from '../pages/Support';
import TaskList from '../pages/TaskList';
import Tools from '../pages/Tools';
import Training from '../pages/Training';

export default function Routes() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/buisnessManagement"
          component={BuisnessManagement}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/taskList" component={TaskList} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/training" component={Training} />
      </Switch>
    </div>
  );
}
