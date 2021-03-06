import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Member from "./pages/member"
import './login.css'
import fakeAuth from './utils/authContext'


function App() {
function PrivateRoute({ children, ...rest }) {
  return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


  return (
   
    <Router>
      <div className='routeDiv'>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route  path="/login">
          <Home />
        </Route>
        <Route  path="/signup">
          <Signup />
        </Route>
        <Route  path="/member">
          <Member />
        </Route>
        </Switch>
      </div>
    </Router>
 
  );
  
}

export default App;
