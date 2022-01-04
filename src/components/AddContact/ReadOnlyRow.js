import React from "react";
function ReadOnlyRow({ contact, handleEditClick, handleCallClick }) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={(event) => handleCallClick(event, contact)}
        >
          Call
        </button>
      </td>
    </tr>
  );
}
export default ReadOnlyRow;
