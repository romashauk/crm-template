import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage/index';
import Dashboard from '../pages/Dashboard/Dashboard';
import TaskList from '../pages/TaskList/TaskList';

export default function Routes() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/task-list" component={TaskList} />
      </Switch>
    </div>
  );
}
