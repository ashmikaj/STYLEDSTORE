import { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.css";

import Card from "../../UI/Card";

const Register = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);
    localStorage.setItem("confirm", matchPwd);
  };

  return (
    <Card className="registerCard">
      <section>
        <h1 className="registerLabel">Register</h1>
        <form onSubmit={handleSubmit} className="registerForm">
          <input
            className="userReg"
            type="text"
            id="username"
            placeholder="Email"
            onChange={e => setName(e.target.value)}
          />

          <input
            className="passReg"
            type="password"
            id="password"
            placeholder="Password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
          />

          <input
            className="passReg"
            type="password"
            id="confirm_pwd"
            placeholder="Confirm Password"
            onChange={e => setMatchPwd(e.target.value)}
            value={matchPwd}
          />

          <button className="signUp">Sign Up</button>
        </form>

        <h5 className="alreadyRegLabel">
          Already registered?
          <br />
          <span className="line">
            <Link to="/login">
              <a href="/login">Sign In</a>
            </Link>
          </span>
        </h5>
      </section>
    </Card>
  );
};

export default Register;
