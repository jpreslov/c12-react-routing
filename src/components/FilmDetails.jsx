import React, { Component } from "react";

export default class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(film => this.setState({ film }))
    .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="card mx-5 my-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.state.film.title}</h5>
          <p className="card-text">
            {this.state.film.director} || {this.state.film.release_date}
          </p>
          <p className="card-text">{this.state.film.description}</p>
        </div>
      </div>
    );
  }
}
