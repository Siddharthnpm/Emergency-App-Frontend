import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid"; //generates a new id for us
import { data } from "./mock-data";
import EditableRow from "./EditableRow";
import "./Table.css";
import ReadOnlyRow from "./ReadOnlyRow";
import { useAuthContext } from "../../util/Context/AuthContext";
// import { Fragment } from "react/cjs/react.production.min";
function Table() {
  const { user } = useAuthContext();
  let apiUrl = "http://localhost:8000";
  apiUrl = "https://emergency-app-test.herokuapp.com";
  //this piece of code can be used anywhere where you need a form (till return)
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    console.log(user);
    if (!user.email) return;
    try {
      const reqUrl = `${apiUrl}/api/users/contacts`;
      const response = await fetch(reqUrl, {
        method: "post",
        body: JSON.stringify({
          email: user.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userMessages = await response.json();
      console.log(userMessages);
      setContacts([...userMessages.contacts]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const [editContactId, setEditContactId] = useState(null);

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    // add new contacts

    const newContact = {
      fullName: addFormData.fullName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
    };

    let newContacts = [...contacts, newContact];
    setContacts(newContacts);

    try {
      const reqUrl = `${apiUrl}/api/users/contacts/addcontact`;
      const response = await fetch(reqUrl, {
        method: "post",
        body: JSON.stringify({
          email: user.email,
          contact: newContact,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }

    // if (contacts.length === 0) {
    //   setContacts(newContact);
    //   return;
    // }
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
    };

    setEditFormData(formValues);
  };

  const handleCallClick = (event, contact) => {
    event.preventDefault();
    window.open(`tel:${contact.phone}`);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(contacts);
    setEditContactId(null);
  };

  return (
    <div className="app-container">
      <h1 className="contact-heading">Add Your Contact</h1>
      <form className="form-input-fields" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="What's their name?"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          placeholder="What's their email?"
          onChange={handleAddFormChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter their phone number"
          onChange={handleAddFormChange}
        />
        <button
          style={{ backgroundColor: "white", fontSize: "25px", color: "black" }}
        >
          Submit
        </button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 &&
              contacts.map((contact) => (
                <>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleCallClick={handleCallClick}
                    />
                  )}
                </>
              ))}
          </tbody>
        </table>
      </form>
      {/* <h1>Add Your Contact</h1>
        <form onSubmit={handleAddFormSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="What's their name?"
                onChange={handleAddFormChange}
            />
            <input
                type="text"
                name="email"
                placeholder="What's their email?"
                onChange={handleAddFormChange}
            />
            <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter their phone number"
                onChange={handleAddFormChange}
            />
            <button

                style={{ backgroundColor: "#6568f4" }}
            >
                Submit
            </button>
        </form> */}
    </div>
  );
}
export default Table;
