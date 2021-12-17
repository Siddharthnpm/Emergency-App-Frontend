import React, { useState } from "react";
import "./About.css"
function About() {
    return (
        <div className="container">
            <h1>Our Privacy Policy</h1>
            <p>"We do not collect personal information for any purpose other than to respond to you. If you choose to provide us with personal information like filling out a Contact Us form with an e-mail address or postal address, and submitting it to us through the website, we use that information to respond to your message, and to help you get the information you have requested."</p>
            <ul className="privacy-list">
                <li>Our website never collects information or creates individual profiles for commercial marketing. While you must provide an e-mail address for a localized response to any incoming questions or comments to us, we recommend that you do NOT include any other personal information.</li>
                <li>If you are asked for any other Personal Information you will be informed how it will be used. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the concerned through the contact us page.</li>
                <li>The use of the term "Personal Information" in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.</li>
            </ul>
        </div>
    );
}
export default About;