// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// function ProtectedRoute({ element, allowedRoles }) {
//   const [status, setStatus] = useState("loading");
//   const [role, setRole] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const verify = async () => {
//       if (!token) {
//         setStatus("unauth");
//         return;
//       }
//       try {
//         const res = await axios.get("http://localhost:5000/api/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (res.data.valid) {
//           setRole(res.data.role);
//           setStatus("auth");
//         } else {
//           setStatus("unauth");
//         }
//       } catch {
//         setStatus("unauth");
//       }
//     };
//     verify();
//   }, [token]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "unauth") return <Navigate to="/login" replace />;
//   if (!allowedRoles.includes(role)) {
//     return role === "admin" ? (
//       <Navigate to="/admin" replace />
//     ) : (
//       <Navigate to="/menu" replace />
//     );
//   }
//   return element;
// }

// export default ProtectedRoute;


// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
