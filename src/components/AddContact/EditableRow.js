import React from "react";
function EditableRow({ editFormData, handleEditFormChange }) {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter a name" name="fullName" onChange={handleEditFormChange} value={editFormData.fullName}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter email" name="email" onChange={handleEditFormChange} value={editFormData.email}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter phone number" name="phoneNumber" onChange={handleEditFormChange} value={editFormData.phoneNumber}></input>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    );
}
export default EditableRow;