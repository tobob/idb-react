import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Add from "./routes/Add";
import Show from "./routes/Show";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">receipt</Link>
            </li>
            <li>
              <Link to="/add">add receipt</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:id">
            <Show />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
