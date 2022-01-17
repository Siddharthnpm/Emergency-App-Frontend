import React, { useState } from "react";
// import { useAuthContext } from "../../util/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../util/Context/AuthContext";

import "./Form.css";
function SignIn() {
  const { user, signin } = useAuthContext();
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleClick() {
    if (loading) return;
    setLoading(true);
    // changeHeading("Hello " + name);
    const userDetails = {
      email,
      password,
    };
    console.log(userDetails);
    await signin(email, password);
    setEmail("");
    setPassword("");
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      <input
        className="form-input"
        onChange={handleChange}
        type="email"
        placeholder="What's your email?"
        value={email}
      />
      <input
        className="form-input"
        onChange={handleChangePassword}
        type="password"
        placeholder="Enter your password"
        value={password}
      />
      <button
        className="form-button"
        onClick={handleClick}
        style={{ backgroundColor: "#6568f4" }}
      >
        Submit
      </button>
      <Link className="auth-option" to="/signup">
        or, create account
      </Link>
      {loading && <h4>Submitting</h4>}
    </div>
  );
}
export default SignIn;
