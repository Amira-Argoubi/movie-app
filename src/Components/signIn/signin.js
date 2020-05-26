import React, { Component } from "react";
import "./signin.css";

class SignIn extends Component {
  state = {
    mail: "",
    password: "",
  };
  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  confirmUser = () => {
    for (var j = 0; j < this.state.mail.length; j++) {
      if (this.state.mail[j] === localStorage.getItem("email")[j]) {
        if (this.state.password[j] === localStorage.getItem("password")[j]) {
          alert("WELCOME");
        } else {
          alert("You have not an account");
        }
      }
    }
    alert("Create an account and join us");
  };

  render() {
    return (
      <div className="form">
        <div id="login">
          <h1>Welcome Back!</h1>

          <form action="/" method="post">
            <div className="field-wrap">
              <input
                type="email"
                required
                autocomplete="off"
                placeholder="Email Adress..."
                onChange={this.emailChange}
              />
            </div>

            <div className="field-wrap">
              <input
                type="password"
                required
                autocomplete="off"
                placeholder="Password..."
                onChange={this.passwordChange}
              />
            </div>

            <button className="button button-block" onClick={this.confirmUser}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
