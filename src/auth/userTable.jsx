import React from "react";

const UserTable = (props) => {
  const { users, onDelete, onEdit, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("userName")}>Name</th>
          <th onClick={() => onSort("firstName")}>Price</th>
          <th onClick={() => onSort("lastName")}>Category</th>
          <th onClick={() => onSort("mobileNo")}>Mobile No</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.userName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.mobileNo}</td>
            <td>
              <button
                onClick={() => onDelete(user)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                onClick={() => onEdit(user)}
                className="btn btn-secondary btn-sm"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
