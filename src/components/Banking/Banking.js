import React, { useState } from "react";
import './Banking.css';
function Banking() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                How to open a bank account?
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            Item 1
                        </div>
                        <div className="dropdown-item">
                            Item 2
                        </div>
                    </div>
                )
            }
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                How to send money to people?
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            Item 1
                        </div>
                        <div className="dropdown-item">
                            Item 2
                        </div>
                    </div>
                )
            }
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                How to close bank account?
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            Item 1
                        </div>
                        <div className="dropdown-item">
                            Item 2
                        </div>
                    </div>
                )
            }
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                How to get Internet Banking?
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            Item 1
                        </div>
                        <div className="dropdown-item">
                            Item 2
                        </div>
                    </div>
                )
            }
        </div>

    );
}
export default Banking;