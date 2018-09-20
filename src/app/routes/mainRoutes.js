import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Feed from 'app/modules/products/feed';

export default class MainRoutes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/main/feed" component={Feed} /> 
          <Redirect to="/main/feed"/>
        </Switch>
    )
  }
}