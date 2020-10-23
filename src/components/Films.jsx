import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from "react-router-dom";

export default class Films extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      //below is the same as this.setState({ films: films })
      .then((films) => this.setState({ films }));
  }
  render() {
    return (
      <div className="row">
        {this.state.films.map((film, id) => {
          return (
            <div className="card mx-5 my-2" style={{ width: "18rem" }} key={id}>
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.release_date}</p>

                <Link to={`/films/${film.id}`}>
                  <button className="btn btn-primary">Show more</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
