import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from '../screens/SignIn';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={SignIn}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}