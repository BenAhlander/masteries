import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './component/Products'
import Theater from './component/Theater'

export default (
    <Switch>
        <Route exact path="/products" component={Products}> </Route>
        <Route exact path="/products/:id" component={Products}> </Route>
        <Route path="/theater" render={() => {
            return(
                <div>
                    <Theater word='this is a prop' />
                </div>
            )
        }} />
        <Route path='/theater/:id' render={(props) => {
              return (
                <div>
                  <Theater {...props} />
                </div>
              )
            }} />
    </Switch>
)