import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./movieList.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import FormAddMovie from "../AddMovie/formAddMovie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Caractere: "",
      movies: this.props.movies,
      addModalShow: false,
    };
  }
  handleChangeName = (value) => {
    this.setState({
      name: value,
    });
  };
  handleChangeDescription = (value) => {
    this.setState({
      description: value,
    });
  };
  handleChangeRate = (value) => {
    this.setState({
      rating: value,
    });
  };
  handleChangeImage = (value) => {
    this.setState({
      image: value,
    });
  };
  addObjectMovie = (e) => {
    this.props.movies.push({
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      image: this.state.image,
    });
    //console.log(movies);
    this.setState({ description: "", name: "", rating: "" });
  };
  /****************************************************Filter Movie By Name ******************************************************** */

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="displays">
        <div className="addBut">
          <ButtonToolbar>
            <button
              className="add"
              variant="primary"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Add Movie
            </button>
            <FormAddMovie
              addfilmName={this.handleChangeName}
              addfilmDescription={this.handleChangeDescription}
              addfilmRate={this.handleChangeRate}
              addfilmImage={this.handleChangeImage}
              addObjectMovie={this.addObjectMovie}
              state={this.state}
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </ButtonToolbar>
        </div>

        <div className="cards">
          {this.props.movies.map((el) => (
            <div className="card">
              <div>
                <img src={el.image} className="image11" alt="Jocker film" />
              </div>
              <div>
                <h3>{el.name}</h3>
              </div>
              <div>
                {" "}
                <h4>{el.rating}</h4>{" "}
              </div>

              <div>
                {" "}
                <span
                  className="favBut"
                  onClick={() => this.props.addFavoris(el)}
                >
                  {" "}
                  <i style={{ color: "red" }} className="fas fa-heart"></i>{" "}
                </span>
              </div>
              <div className="btn-card">
                <Router>
                  <Link to={"/detail/" + el.id}>
                    {" "}
                    <button className="btn-card-detail">More Detail</button>
                  </Link>
                </Router>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Movies;
