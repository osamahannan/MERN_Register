import './index.css';
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

        <Route exact path= "/About">
          <About />
        </Route>

        <Route exact path= "/contact">
          <Contact />
        </Route>

        <Route exact path= "/login">
          <Login />
        </Route>

        <Route exact path= "/signup">
          <Signup />
        </Route>
        
      </>
    </div>
  );
}

export default App;
