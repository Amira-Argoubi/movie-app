import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Logo from "./logoMovieApp.jpg";
import "./navbar.css";

class Navbar extends Component {
  state = {
    sign: false,
    login: false,
  };

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  render() {
    const { login, sign } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark color_navbar">
        <img className="logo_movieapp" src={Logo} alt="Log of the movie app" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                Home <span class="sr-only"></span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/favourite">Favourite</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 ">
            <input
              style={{ background: "transparent " }}
              className="form-control mr-sm-2 "
              type="search"
              onChange={this.props.SearchBar}
              placeholder="Search...."
              aria-label="Search"
            />
          </form>

          <Link to={"/signin"}>
            {" "}
            <button
              style={{ background: "transparent " }}
              type="button"
              className="btn btn-secondary but"
            >
              Sign In
            </button>
          </Link>

          <Link to={"/signup"}>
            <button
              style={{ background: "transparent " }}
              type="button"
              className="btn btn-secondary but"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;
