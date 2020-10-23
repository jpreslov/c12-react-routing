import React, { Component } from "react";

export default class PeopleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      appearances: {},
    };
  }
  componentDidMount() {
    fetch(
      `https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((person) =>
        this.setState({ person }, () => {
          fetch(`${person.films}`)
            .then((res) => res.json())
            .then((appearances) => this.setState({ appearances }));
        })
      )
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="row">
        <div className="card mx-5 my-2" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.state.person.name}</h5>
            <p className="card-text">
              Appears in: {this.state.appearances.title}
            </p>
            <p className="card-text">Age: {this.state.person.age}</p>
            <p className="card-text">
              Eye color: {this.state.person.eye_color}
            </p>
            <p className="card-text">
              Hair color: {this.state.person.hair_color}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
