import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email (phone for mobile accounts)</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="text" />
          <button>Continue</button>
        </form>

        <p>
          By creating an account, you agree to FAKE AMAZON CLONE's Conditions of
          Use and Privacy Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
