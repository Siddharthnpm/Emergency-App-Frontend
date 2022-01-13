import React, { useState } from "react";
import { useAuthContext } from "../../util/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";
import "./AddContact.css";

function AddContact() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  if (!user) {
    navigate("/signup");
  }

  return (
    <div className="container-addContact">
      {user ? (
        <Table />
      ) : (
        <>
          <h1>You Need to login first</h1>
          <Link to="/login" className="btn btn--primary btn--large">
            Go to Login
          </Link>
        </>
      )}
    </div>
  );
}
export default AddContact;
