import React, { useState } from "react";
import './Form.css'
function SignIn() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    function handleChange(event) {
        console.log(event.target.value);
        // setName(event.target.value);
    }

    function handleClick() {
        // changeHeading("Hello " + name);
    }

    return (
        <div className="container">
            <h1>Sign In</h1>
            <input className="form-input"
                onChange={handleChange}
                type="email"
                placeholder="What's your email?"
            />
            <input className="form-input"
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
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