import React, { useEffect, useState } from "react";
import axios from "axios";

function Usersmg() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch users
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // ✅ Update user role
  const changeRole = async (id, role) => {
    const newRole = role === "admin" ? "user" : "admin";
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, { role: newRole });
      fetchUsers();
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  // ✅ Update user name/email
  const updateUser = async (id, field, oldValue) => {
    const newValue = prompt(`Enter new ${field}:`, oldValue);
    if (!newValue || newValue === oldValue) return;

    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, { [field]: newValue });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Registered Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.name}{" "}
                  <button onClick={() => updateUser(user._id, "name", user.name)}>
                    ✏️ Edit
                  </button>
                </td>
                <td>
                  {user.email}{" "}
                  <button onClick={() => updateUser(user._id, "email", user.email)}>
                    ✏️ Edit
                  </button>
                </td>
                <td>
                  {user.role}{" "}
                  <button onClick={() => changeRole(user._id, user.role)}>
                    🔄 Change
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteUser(user._id)} style={{ color: "red" }}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Usersmg;
