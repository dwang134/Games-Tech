import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Tech from "./components/pages/Tech";
import SignUp from "./components/pages/SignUp";
//different syntax?
// const App: React.FC = () => {

// }

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path= "/Games-Tech" exact component= {Home}/>
          <Route path= "/Games-Tech/home" exact component= {Home}/>
          <Route path= "/Games-Tech/games" exact component= {Games}/>
          <Route path= "/Games-Tech/tech" exact component= {Tech}/>
          <Route path= "/Games-Tech/sign-up" exact component= {SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
