// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Box,
//   Grid,
//   Card,
//   CardContent,
// } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import BookIcon from "@mui/icons-material/Book";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import QuizIcon from "@mui/icons-material/Quiz";
// import BuildIcon from "@mui/icons-material/Build"; // NEW ICON

// function Menu() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   const handleProtectedNavigation = (path) => {
//     if (localStorage.getItem("isLoggedIn")) {
//       navigate(path);
//     } else {
//       alert("Please login first!");
//       navigate("/login");
//     }
//   };

//   return (
//     <Box sx={{ bgcolor: "#0d1117", minHeight: "100vh" }}>
//       {/* Navbar */}
//       <AppBar
//         position="fixed"
//         sx={{
//           background: "rgba(13,17,23,0.85)",
//           backdropFilter: "blur(8px)",
//           boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{
//               flexGrow: 1,
//               fontWeight: "bold",
//               cursor: "pointer",
//               color: "#ff9800",
//             }}
//             onClick={() => navigate("/")}
//           >
//             Career Guidance
//           </Typography>
//           {localStorage.getItem("isLoggedIn") ? (
//             <Button
//               sx={{
//                 color: "white",
//                 border: "1px solid #ff9800",
//                 borderRadius: "25px",
//                 px: 3,
//                 "&:hover": { background: "#ff9800", color: "black" },
//               }}
//               onClick={handleLogout}
//             >
//               Logout
//             </Button>
//           ) : (
//             <Button
//               sx={{
//                 background: "linear-gradient(45deg, #ff9800, #ff5722)",
//                 color: "white",
//                 fontWeight: "bold",
//                 borderRadius: "25px",
//                 px: 3,
//                 "&:hover": {
//                   background: "linear-gradient(45deg,#ff5722,#ff9800)",
//                   boxShadow: "0px 0px 12px rgba(255,152,0,0.7)",
//                 },
//               }}
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Box
//         sx={{
//           pt: 10,
//           height: "65vh",
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url("https://cdn.pixabay.com/photo/2016/11/18/12/52/achievement-1836974_1280.jpg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           color: "white",
//           px: 2,
//         }}
//       >
//         <Box>
//           <Typography
//             variant="h3"
//             fontWeight="bold"
//             sx={{
//               background: "linear-gradient(45deg,#ff9800,#ff5722)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Explore Our Menu
//           </Typography>
//           <Typography variant="h6" mt={2}>
//             Colleges, Courses, Exams, Tests & Tools – all in one place
//           </Typography>
//         </Box>
//       </Box>

//       {/* Features Section */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={4} justifyContent="center">
//           {[
//             {
//               title: "Colleges",
//               desc: "Top institutes for your career",
//               icon: <SchoolIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
//               path: "/colleges",
//             },
//             {
//               title: "Courses",
//               desc: "Explore trending courses",
//               icon: <BookIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
//               path: "/courses",
//             },
//             {
//               title: "Exams",
//               desc: "Prepare for success",
//               icon: <AssignmentIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
//               path: "/exams",
//             },
//             {
//               title: "Test",
//               desc: "Practice and evaluate skills",
//               icon: <QuizIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
//               path: "/test",
//             },
//             {
//               title: "More Tools",
//               desc: "Quizzes, Resume Builder & more",
//               icon: <BuildIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
//               path: "/mainmenu", // 🔹 Link to Tools.js
//             },
//           ].map((item, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   cursor: "pointer",
//                   textAlign: "center",
//                   p: 3,
//                   borderRadius: 4,
//                   background:
//                     "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
//                   backdropFilter: "blur(10px)",
//                   color: "white",
//                   transition: "0.4s",
//                   "&:hover": {
//                     transform: "translateY(-10px) scale(1.05)",
//                     boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
//                   },
//                 }}
//                 onClick={() => handleProtectedNavigation(item.path)}
//               >
//                 {item.icon}
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold">
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2">{item.desc}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <Box
//         sx={{
//           background: "#0d1117",
//           textAlign: "center",
//           py: 4,
//           mt: 5,
//           color: "gray",
//           borderTop: "1px solid #222",
//         }}
//       >
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Career Guidance. All Rights Reserved.
//         </Typography>
//         <Typography variant="body2" mt={1}>
//           About | Contact | Privacy Policy
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Menu;




import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import BuildIcon from "@mui/icons-material/Build";

function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Colleges",
      desc: "Top institutes for your career",
      icon: <SchoolIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
      path: "/colleges",
    },
    {
      title: "Courses",
      desc: "Explore trending courses",
      icon: <BookIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
      path: "/courses",
    },
    {
      title: "Exams",
      desc: "Prepare for success",
      icon: <AssignmentIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
      path: "/exams",
    },
    {
      title: "Test",
      desc: "Practice and evaluate skills",
      icon: <QuizIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
      path: "/test",
    },
    {
      title: "More Tools",
      desc: "Quizzes, Resume Builder & more",
      icon: <BuildIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
      path: "/mainmenu",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0d1117", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 10,
          height: "65vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url("https://cdn.pixabay.com/photo/2016/11/18/12/52/achievement-1836974_1280.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg,#ff9800,#ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore Our Menu
          </Typography>
          <Typography variant="h6" mt={2}>
            Colleges, Courses, Exams, Tests & Tools – all in one place
          </Typography>
        </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.05)",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          background: "#0d1117",
          textAlign: "center",
          py: 4,
          mt: 5,
          color: "gray",
          borderTop: "1px solid #222",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Career Guidance. All Rights Reserved.
        </Typography>
        <Typography variant="body2" mt={1}>
          About | Contact | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
}

export default Menu;
