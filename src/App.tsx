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
          <Route path= "/" exact component= {Home}/>
          <Route path= "/home" exact component= {Home}/>
          <Route path= "/games" exact component= {Games}/>
          <Route path= "/tech" exact component= {Tech}/>
          <Route path= "/sign-up" exact component= {SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
