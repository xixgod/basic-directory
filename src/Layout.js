// @flow

import * as React from "react";

import { Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>To Do</div>} />
    </Switch>
  );
}

export default Routes;
