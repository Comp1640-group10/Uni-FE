import React, { Fragment, useState } from "react";
import axios from "axios";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://unibackend.azurewebsites.net/api/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <div className="login-background">
        <div>
          <div className="login-form">
            <h3 className="login-title">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="submit-btn btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
