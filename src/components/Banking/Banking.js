import React, { useState } from "react";
import "./Banking.css";
function Banking() {
  const [isActive, setIsActive] = useState(false);

  const [isActive2, setIsActive2] = useState(false);

  const [isActive3, setIsActive3] = useState(false);

  const [isActive4, setIsActive4] = useState(false);

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          How to open a bank account?
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            <h3>
              Steps to Open a Savings Account with State Bank of India(SBI)
            </h3>
            <p>
              To open a SBI savings account at any SBI Bank branch, customers
              will have to follow the steps mentioned below:
              <ul>
                <li>
                  Visit the State Bank of India homepage. <a href="https://sbi.co.in/web/personal-banking/accounts/saving-account">Link</a>
                </li>
                <li>
                  Click on “Apply Now”.
                </li>
                <li>
                  Choose “ Sbi Savings Accounts”.
                </li>
                <li>
                  Fill in the application form - name, address, date of birth and other various details - and click on submit.
                </li>
                <li>
                  Once the details have been submitted, the bank will intimate the applicant to visit the branch will the requisite KYC documents - proof of identity and address.
                </li>
                <li>
                  On submission of the documents, the bank will initiate the verification process.
                </li>
                <li>
                  Following approval, the account will be activated within 3-5 bank working days.
                </li>
              </ul>
            </p>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive2(!isActive2)}>
          How to send money to people?
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive2 && (
          <div className="dropdown-content">
            <h3>
              Steps to Open a Savings Account with State Bank of India(SBI)
            </h3>
            <p>
              To open a SBI savings account at any SBI Bank branch, customers
              will have to follow the steps mentioned below:
              <ul>
                <li>
                  Visit the State Bank of India homepage. <a href="https://sbi.co.in/web/personal-banking/accounts/saving-account">Link</a>
                </li>
                <li>
                  Click on “Apply Now”.
                </li>
                <li>
                  Choose “ Sbi Savings Accounts”.
                </li>
                <li>
                  Fill in the application form - name, address, date of birth and other various details - and click on submit.
                </li>
                <li>
                  Once the details have been submitted, the bank will intimate the applicant to visit the branch will the requisite KYC documents - proof of identity and address.
                </li>
                <li>
                  On submission of the documents, the bank will initiate the verification process.
                </li>
                <li>
                  Following approval, the account will be activated within 3-5 bank working days.
                </li>
              </ul>
            </p>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive3(!isActive3)}>
          How to close bank account?
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive3 && (
          <div className="dropdown-content">
            <div className="dropdown-item">Item 1</div>
            <div className="dropdown-item">Item 2</div>
          </div>
        )}
      </div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive4(!isActive4)}>
          How to get Internet Banking
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive4 && (
          <div className="dropdown-content">
            <div className="dropdown-item">Item 1</div>
            <div className="dropdown-item">Item 2</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Banking;
