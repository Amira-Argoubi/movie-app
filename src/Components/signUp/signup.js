import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    userName: "",
    userMail: "",
    userPassword: "",
  };

  getUserName = (e) => {
    localStorage.setItem("name", e.target.value);
    this.setState({ name: e.target.value });
  };

  getUserMail = (e) => {
    localStorage.setItem("email", e.target.value);
    this.setState({ userMail: e.target.value });
  };
  getUserPass = (e) => {
    localStorage.setItem("password", e.target.value);
    this.setState({ userPassword: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="form">
          <h1> Create an account</h1>
          <input
            Name="Name"
            type="text"
            placeholder="Your name..."
            onChange={this.getUserName}
          />
          <br></br>
          <input
            type="email"
            className="inp"
            id="email"
            placeholder="Username...."
            onChange={this.getUserMail}
          />
          <br />{" "}
          <input
            className="inp"
            type="password"
            id="password"
            placeholder="Your Password..."
            onChange={this.getUserPass}
          />
          <br />
          <button class="botti">Sign Up</button>
        </form>
      </div>
    );
  }
}
