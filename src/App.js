import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {

  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
            <Header />
          </Route>
          <Route path="/header">
            <Header></Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
