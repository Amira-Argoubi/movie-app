import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./movieList.css";
import { ButtonToolbar } from "react-bootstrap";
import AddMovie from "../AddMovie/AddNew";

class Movies extends Component {
  state = {
    movies: this.props.movies,
    addModal: false,
  };

  /**************functions to get new movies informations *********/
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

  /******************function to add new movie******************/
  addNew = (e) => {
    this.state.movies.push({
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      image: this.state.image,
    });
    this.setState({ description: "", name: "", rating: "" });
  };

  /************function to close add modal****************/
  addModalClose = () => {
    this.setState({ addModal: false });
  };

  /////////////// render part/////////////
  render() {
    return (
      <div className="displays">
        <div className="addBut">
          <ButtonToolbar>
            <button
              className="add"
              variant="primary"
              onClick={() => this.setState({ addModal: true })}
            >
              Add Movie
            </button>
            <AddMovie
              addfilmName={this.handleChangeName}
              addfilmDescription={this.handleChangeDescription}
              addfilmRate={this.handleChangeRate}
              addfilmImage={this.handleChangeImage}
              addNew={this.addNew}
              state={this.state}
              show={this.state.addModal}
              onHide={this.addModalClose}
            />
          </ButtonToolbar>
        </div>

        <div className="cards">
          {this.props.movies.map((el) => (
            <div className="card">
              <div>
                <img src={el.image} className="image" alt="cardMovie" />
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
                <Link to={"/detail/" + el.id}>
                  {" "}
                  <button className="btn-card-detail">More Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Movies;
