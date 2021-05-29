import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
