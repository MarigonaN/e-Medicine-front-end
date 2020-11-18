import React from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Todos from "./components/Todos";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./components/Admin";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Pharm from "./components/Pharm";
import Covid19 from "./components/animations/Covid19";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <UnPrivateRoute path="/Covid19" component={Covid19} />
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />

        <PrivateRoute
          path="/todos"
          roles={["user", "admin"]}
          component={Todos}
        />
        <PrivateRoute
          path="/pharmacy"
          roles={["user", "admin"]}
          component={Pharm}
        />

        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      </Router>
    </div>
  );
}

export default App;
