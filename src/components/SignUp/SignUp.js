import React, { useState } from "react";
import { useAuthContext } from "../../util/Context/AuthContext";
import { useNavigate } from "react-router-dom";
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

  function handleClick() {
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
    signup(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
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
    </div>
  );
}
export default SignUp;
