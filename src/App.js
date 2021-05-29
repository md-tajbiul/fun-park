import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Main from "./components/Main";


function App() {

  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
            <Main />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
