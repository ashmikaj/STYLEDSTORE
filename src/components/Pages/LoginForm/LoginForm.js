import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../UI/Card";
import "./Login.css";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, SetSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      user === localStorage.getItem("Name") &&
      pwd === localStorage.getItem("confirm")
    ) {
      SetSuccess(true);
      localStorage.setItem("loggedIn", "true");
    }
  };

  return (
    <div>
      {success ? (
        <a href="/home">Home</a>
      ) : (
        <Card className="loginCard">
          <section>
            <h1 className="signInLabel">Sign In</h1>
            <form onSubmit={handleSubmit} className="loginForm">
              <input
                className="userInput"
                type="text"
                id="username"
                placeholder="Email"
                onChange={e => setUser(e.target.value)}
                value={user}
                required
              />

              <input
                className="passInput"
                type="password"
                id="password"
                onChange={e => setPwd(e.target.value)}
                placeholder="Password"
                value={pwd}
                required
              />

              <button className="signIn">Sign In</button>
            </form>

            <h5>
              Need an Account?
              <br />
              <span className="line">
                <a href="/register">Sign Up</a>
              </span>
            </h5>
          </section>
        </Card>
      )}
    </div>
  );
};

export default LoginForm;
