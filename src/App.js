import React from "react";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar"></nav>
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link className="nav-link" to="/">Todos</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link" to="/create">Create Todo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/id" component={EditTodo} />
        <Route exact path="/" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
