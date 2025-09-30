// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Pages
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Menu from "./pages/Menu";
// import Colleges from "./pages/Colleges";
// import Courses from "./pages/Courses";
// import Exams from "./pages/Exams";
// import Home from "./pages/Home";
// import Test from "./pages/Test";
// import Tools from "./pages/Tools";
// import Careerpaths from "./pages/Careerpaths";
// import Mainmenu from "./pages/Mainmenu";

// // Admin Pages
// import Admin from "./Admin page/Admin";
// import Collegesmg from "./Admin page/Collegesmg";
// import Coursesmg from "./Admin page/Coursesmg";
// import Exammg from "./Admin page/Exammg";
// import Usersmg from "./Admin page/Usersmg";
// import Careerpathsmg from "./Admin page/Careerpathsmg";

// // Test Pages
// import UPSCTest from "./Test/UPSCTest";
// import IITTest from "./Test/IITTest";
// import SSCTest from "./Test/SSCTest";
// import CATTest from "./Test/CATTest";

// // Navbar
// import Navbar from "./components/Navbar";

// // 🔒 Protected Route with Role
// function PrivateRoute({ element, allowedRole }) {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   if (!token) {
//     return <Navigate to="/login" />; // Redirect to login if not logged in
//   }

//   if (allowedRole && role !== allowedRole) {
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         ❌ Access Denied
//       </h2>
//     );
//   }

//   return element;
// }

// // ✅ Layout that shows Navbar only when logged in
// function Layout({ children }) {
//   const token = localStorage.getItem("token");
//   return (
//     <>
//       {token && <Navbar />} {/* Show Navbar only if logged in */}
//       {children}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* All other routes are protected */}
//           <Route path="/" element={<PrivateRoute element={<Home />} />} />
//           <Route path="/menu" element={<PrivateRoute element={<Menu />} allowedRole="user" />} />
//           <Route path="/colleges" element={<PrivateRoute element={<Colleges />} allowedRole="user" />} />
//           <Route path="/courses" element={<PrivateRoute element={<Courses />} allowedRole="user" />} />
//           <Route path="/exams" element={<PrivateRoute element={<Exams />} allowedRole="user" />} />
//           <Route path="/test" element={<PrivateRoute element={<Test />} allowedRole="user" />} />
//           <Route path="/tools" element={<PrivateRoute element={<Tools />} allowedRole="user" />} />
//           <Route path="/careerpaths" element={<PrivateRoute element={<Careerpaths />} allowedRole="user" />} />
//           <Route path="/mainmenu" element={<PrivateRoute element={<Mainmenu />} allowedRole="user" />} />

//           {/* Test Pages */}
//           <Route path="/test/upsctest" element={<PrivateRoute element={<UPSCTest />} allowedRole="user" />} />
//           <Route path="/test/iittest" element={<PrivateRoute element={<IITTest />} allowedRole="user" />} />
//           <Route path="/test/ssctest" element={<PrivateRoute element={<SSCTest />} allowedRole="user" />} />
//           <Route path="/test/cattest" element={<PrivateRoute element={<CATTest />} allowedRole="user" />} />

//           {/* Admin Routes */}
//           <Route path="/usersmg" element={<PrivateRoute element={<Usersmg />} allowedRole="admin" />} />
//           <Route path="/admin" element={<PrivateRoute element={<Admin />} allowedRole="admin" />} />
//           <Route path="/exammg" element={<PrivateRoute element={<Exammg />} allowedRole="admin" />} />
//           <Route path="/collegesmg" element={<PrivateRoute element={<Collegesmg />} allowedRole="admin" />} />
//           <Route path="/coursesmg" element={<PrivateRoute element={<Coursesmg />} allowedRole="admin" />} />
//           <Route path="/careerpathsmg" element={<PrivateRoute element={<Careerpathsmg />} allowedRole="admin" />} />

//           {/* Catch all - redirect unknown routes to login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Colleges from "./pages/Colleges";
import Courses from "./pages/Courses";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Tools from "./pages/Tools";
import Careerpaths from "./pages/Careerpaths";
import Mainmenu from "./pages/Mainmenu";

// Admin Pages
import Admin from "./Admin page/Admin";
import Collegesmg from "./Admin page/Collegesmg";
import Coursesmg from "./Admin page/Coursesmg";
import Exammg from "./Admin page/Exammg";
import Usersmg from "./Admin page/Usersmg";
import Careerpathsmg from "./Admin page/Careerpathsmg";

// Test Pages
import UPSCTest from "./Test/UPSCTest";
import IITTest from "./Test/IITTest";
import SSCTest from "./Test/SSCTest";
import CATTest from "./Test/CATTest";

// Navbar
import Navbar from "./components/Navbar";

// 🔒 Protected Route with Role
function PrivateRoute({ element, allowedRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && role !== allowedRole) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        ❌ Access Denied
      </h2>
    );
  }

  return element;
}

// ✅ Layout for protected pages (Navbar + children)
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - No Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes - Navbar visible */}
        <Route
          path="/"
          element={
            <Layout>
              <PrivateRoute element={<Home />} />
            </Layout>
          }
        />
        <Route
          path="/menu"
          element={
            <Layout>
              <PrivateRoute element={<Menu />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/colleges"
          element={
            <Layout>
              <PrivateRoute element={<Colleges />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <PrivateRoute element={<Courses />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/exams"
          element={
            <Layout>
              <PrivateRoute element={<Exams />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/test"
          element={
            <Layout>
              <PrivateRoute element={<Test />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/tools"
          element={
            <Layout>
              <PrivateRoute element={<Tools />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/careerpaths"
          element={
            <Layout>
              <PrivateRoute element={<Careerpaths />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/mainmenu"
          element={
            <Layout>
              <PrivateRoute element={<Mainmenu />} allowedRole="user" />
            </Layout>
          }
        />

        {/* Test Pages */}
        <Route
          path="/test/upsctest"
          element={
            <Layout>
              <PrivateRoute element={<UPSCTest />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/test/iittest"
          element={
            <Layout>
              <PrivateRoute element={<IITTest />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/test/ssctest"
          element={
            <Layout>
              <PrivateRoute element={<SSCTest />} allowedRole="user" />
            </Layout>
          }
        />
        <Route
          path="/test/cattest"
          element={
            <Layout>
              <PrivateRoute element={<CATTest />} allowedRole="user" />
            </Layout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/usersmg"
          element={
            <Layout>
              <PrivateRoute element={<Usersmg />} allowedRole="admin" />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <PrivateRoute element={<Admin />} allowedRole="admin" />
            </Layout>
          }
        />
        <Route
          path="/exammg"
          element={
            <Layout>
              <PrivateRoute element={<Exammg />} allowedRole="admin" />
            </Layout>
          }
        />
        <Route
          path="/collegesmg"
          element={
            <Layout>
              <PrivateRoute element={<Collegesmg />} allowedRole="admin" />
            </Layout>
          }
        />
        <Route
          path="/coursesmg"
          element={
            <Layout>
              <PrivateRoute element={<Coursesmg />} allowedRole="admin" />
            </Layout>
          }
        />
        <Route
          path="/careerpathsmg"
          element={
            <Layout>
              <PrivateRoute element={<Careerpathsmg />} allowedRole="admin" />
            </Layout>
          }
        />

        {/* Catch all - redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

