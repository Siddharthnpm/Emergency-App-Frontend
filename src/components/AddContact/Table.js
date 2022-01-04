import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid"; //generates a new id for us
import { data } from "./mock-data";
import EditableRow from "./EditableRow";
import "./Table.css";
import ReadOnlyRow from "./ReadOnlyRow";
// import { Fragment } from "react/cjs/react.production.min";
function Table() {
  //this piece of code can be used anywhere where you need a form (till return)
  const [contacts, setContacts] = useState(data);

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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
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
            {contacts.map((contact) => (
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
