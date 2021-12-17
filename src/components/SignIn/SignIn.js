import React, { useState } from "react";
import './Form.css'
function SignIn() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    function handleChange(event) {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    function handleClick() {
        // changeHeading("Hello " + name);
        const userDetails = {
            email,
            password
        };
        console.log(userDetails);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <h1>Sign In</h1>
            <input className="form-input"
                onChange={handleChange}
                type="email"
                placeholder="What's your email?"
                value={email}
            />
            <input className="form-input"
                onChange={handleChangePassword}
                type="password"
                placeholder="Enter your password"
                value={password}
            />
            <button className="form-button"
                onClick={handleClick}
                style={{ backgroundColor: "#6568f4" }}

            >
                Submit
            </button>
        </div>
    );
}
export default SignIn;