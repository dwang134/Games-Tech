import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

//different syntax?
// const App: React.FC = () => {

// }

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path= "/" exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
