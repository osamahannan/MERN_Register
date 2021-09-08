import React, { createContext, useReducer} from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Errorpage from "./Components/Errorpage";
import Logout from './Components/Logout';
import { initialState, reducer } from '../src/reducer/UseReducer';

//contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/About">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/logout">
        <Logout />
      </Route>

      <Route>
        <Errorpage />
      </Route>
    </Switch>
  );
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Nav />
        <Routing />

      </UserContext.Provider>
    </>
  )
}

export default App;
