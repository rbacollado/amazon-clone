import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        /* successfully created an user with an email and password*/
        console.log(auth);
        if (auth) {
          history.push("/");
          alert("Registered Successfully");
        }
      })
      .catch((err) => alert(err.message));
  };

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
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button className="login__signIn" type="submit" onClick={signIn}>
            Continue
          </button>
        </form>

        <p>
          By creating an account, you agree to FAKE AMAZON CLONE's Conditions of
          Use and Privacy Notice.
        </p>
      </div>
      <p>New to Amazon?</p>
      <button className="login__resgister" onClick={register}>
        Create your Amazon account{" "}
      </button>
    </div>
  );
}

export default Login;
