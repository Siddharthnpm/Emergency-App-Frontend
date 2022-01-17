import React, { useState } from "react";
import { useAuthContext } from "../../util/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
function SignUp() {
  const { user, signup } = useAuthContext();
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleClick() {
    if (loading) return;
    setLoading(true);
    // changeHeading("Hello " + name);
    // console.log(name);
    // console.log(email);
    // console.log(password);
    const userDetails = {
      name,
      email,
      password,
    };
    console.log(userDetails);
    await signup(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
    setLoading(false);
    // return userDetails;
  }

  return (
    <div className="container">
      <h1>Create Account</h1>
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <input
        className="form-input"
        onChange={handleChangeEmail}
        type="email"
        placeholder="Enter your email"
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
      <Link className="auth-option" to="/login">
        or, login
      </Link>
      {loading && <h4>Submitting</h4>}
    </div>
  );
}
export default SignUp;
