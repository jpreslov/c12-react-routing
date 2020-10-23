import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Films from "./Films";
import FilmDetails from "./FilmDetails";
import People from "./People";
import PeopleDetails from "./PeopleDetails";
import logo from "../assets/logo.png";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="m-5">Welcome to Studio Ghibli Info ahahahaha</h1>
        <Router>
          <Link to="/">
            <img src={logo} alt="Ghibli logo" />
          </Link>

          <Link to="/films">
            <button className="btn btn-primary shadow mx-5 my-2">
              Show Films
            </button>
          </Link>
          <Link to="/people">
            <button className="btn btn-primary shadow mx-5 my-2">
              Show People
            </button>
          </Link>

          <Switch>
            <Route path="/films/:id" component={FilmDetails} />
            <Route path="/people/:id" component={PeopleDetails} />
            <Route path="/films" component={Films} />
            <Route path="/people" component={People} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
