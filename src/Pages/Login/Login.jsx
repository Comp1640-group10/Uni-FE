import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });
  }
  render() {
    return (
      <div className="login-form">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}