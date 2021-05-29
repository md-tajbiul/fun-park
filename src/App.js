import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Deals from "./components/Deals/Deals";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <PrivateRoute path="/deals/:id">
              <Deals />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
