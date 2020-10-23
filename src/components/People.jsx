import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class People extends Component {
    constructor() {
        super();
        this.state = {
          people: [],
        };
      }
    
      componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
          .then((res) => res.json())
          //below is the same as this.setState({ people: people })
          .then((people) => this.setState({ people }));
      }
      render() {
        return (
          <div className="row">
            {this.state.people.map((person, id) => {
              return (
                <div className="card mx-5 my-2" style={{ width: "18rem" }} key={id}>
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">{person.age}</p>
    
                    <Link to={`/people/${person.id}`}>
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