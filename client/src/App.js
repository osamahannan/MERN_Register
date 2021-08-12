import './index';
import { Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <>
        <Nav/>

        <Route exact path= "/">
          <Home />
        </Route>

        <Route path= "/About">
          <About />
        </Route>

        <Route path= "/contact">
          <Contact />
        </Route>

        <Route path= "/login">
          <Login />
        </Route>

        <Route path= "/signup">
          <Signup />
        </Route>
        
      </>
    </div>
  );
}

export default App;
