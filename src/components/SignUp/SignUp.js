import React, { useState } from "react";
import './SignUp.css'
function Form() {
    const [name, setName] = useState("");

    const [headingText, changeHeading] = useState("Hello");


    function handleChange(event) {
        // console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick() {
        changeHeading("Hello " + name);
    }

    return (
        <div className="container">
            <h1>Create Account</h1>
            <input className="form-input"
                onChange={handleChange}
                type="text"
                placeholder="What's your name?"
            />
            <input className="form-input"
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
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
export default Form;