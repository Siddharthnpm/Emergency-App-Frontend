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
              Steps to Send Money to People using WesternUnion Money Transfer
            </h3>
            <p>
              To send money to people using westernUnion money transfer, customers
              will have to follow the steps mentioned below:
              <ul>
                <li>
                  Visit the westernUnion homepage. <a href="https://www.westernunion.com/in/en/send-money.html">Link</a>
                </li>
                <li>
                  Click on “Start now”.
                </li>
                <li>
                  Enter the amount you’d like to send.
                </li>
                <li>
                  Select ‘Send to a bank account’.
                </li>
                <li>
                  Select your payment method.
                </li>
                <li>
                  You’ll need your receiver’s bank details: bank name, code, and account number1.
                </li>
                <li>
                  You can save your receiver’s details to make repeat transfers faster and easier.
                </li>
                <li>
                  Make sure to check your details before hitting send. Once the money transfer is done, they'll email you a confirmation message with the Money Transfer Control Number (MTCN). Share the MTCN with only your intended receiver.
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
            <h3>
              Steps to close a bank account
            </h3>
            <p>
              To close their SBI Bank Accounts, people have to do the following step(s).
              <ul>
                <li>
                  You cannot close your SBI savings, salary, or current account online; you must visit the branch with the required letter or form, as well as ID documents, to close the account. You can download the account closure form from the SBI website.

                  Mention the reason for your closure and submit all account-related items such as a debit card, a cheque book, and a passbook. Account closure fees may be charged by the bank depending on the account's tenure.

                  Account holders who close their bank accounts after a year are not charged any fees by SBI. The account holder will have to pay fees if the SBI account is closed in between 15 days to one year; the account closure charge is Rs 500 pluis GST for savings account.

                  For current accounts, the charge will be Rs 1,000 plus GST for tenure from 14 days to 1 year after account opening, and Rs 500 plus GST for tenure from 1 year to 5 years following account opening.
                </li>
              </ul>
            </p>
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
            <h3>
              Steps to get Internet Banking
            </h3>
            <p>
              To enable Internet Banking in their SBI bank account, people have to do the following steps
              <ul>
                <li>
                  Download the registration form to apply for Internet Banking facility. Complete and submit the form to the branch where you hold an account. The Branch Officer will guide you through the registration process and will issue the Internet Banking Kit.
                </li>
                <li>
                  Visit the Internet Banking Page at SBI's official website. <a href="https://www.onlinesbi.com/personal/newuser_reg.html#:~:text=Download%20the%20registration%20form%20to,issue%20the%20Internet%20Banking%20Kit.">Link</a>
                </li>
              </ul>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Banking;
