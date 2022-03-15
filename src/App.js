import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/frontend/Home"
import MasterLayout from './layouts/admin/MasterLayout';
import Auth from './components/frontend/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import Protected from './components/frontend/Protected';

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
          <Protected component={Home}/>
          </Route>

          <Route exact path="/" cmp={Auth}/>
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
        </Switch>
      </Router>
    </div>
  )
};
export default App;