import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from 'app/screens/SignIn';
import Register from 'app/screens/Register';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/register" component={Register}/>
            <Redirect to="/signin" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}