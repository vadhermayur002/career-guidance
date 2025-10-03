// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   Paper,
//   Grid,
// } from "@mui/material";

// function Admin() {
//   const navigate = useNavigate();

//   // ✅ Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <Container maxWidth="lg">
//       <Paper sx={{ mt: 5, p: 4, borderRadius: 3, boxShadow: 4 }}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
//           Admin Dashboard
//         </Typography>

//         <Typography variant="subtitle1" align="center" color="text.secondary">
//           Welcome, Admin! Manage your application here.
//         </Typography>

//         <Grid container spacing={3} sx={{ mt: 4 }}>
//           {/* Manage Users */}
//           <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage Users</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 View, edit or remove users
//               </Typography>

//                <Button onClick={() => navigate("/usersmg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                 Manage Users 
//               </Button>
//             </Paper>
//           </Grid>

//           {/* Manage Courses */}
//           <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage Courses</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Add, update or delete courses
//               </Typography>
//               <Button onClick={() => navigate("/coursesmg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                 Manage Courses 
//               </Button>
//             </Paper>
//           </Grid>

//           {/* Manage Colleges */}
//             <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage College</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Update college details
//               </Typography>
//                <Button onClick={() => navigate("/collegesmg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                 Manage Colleges
//               </Button>
//             </Paper>
//           </Grid>
         
        

        
//           {/* Manage Exams */}
//             <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage Exam</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Update Exam details
//               </Typography>
//                <Button onClick={() => navigate("/Exammg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                 Manage Exams 
//               </Button>
//             </Paper>
//           </Grid>
        

         
//           {/* Manage career paths*/}
//             <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage Exam</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Update Career paths details
//               </Typography>
//                <Button onClick={() => navigate("/careerpathsmg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                career paths
//               </Button>
//             </Paper>
//           </Grid>

//           {/* Manage career paths*/}
//             <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
//               <Typography variant="h6">Manage Exam</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Update test details
//               </Typography>
//                <Button onClick={() => navigate("/testmg")}
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: "#1a237e" }}
//               >
//                career paths
//               </Button>
//             </Paper>
//           </Grid>

 
//            </Grid>

//         {/* Logout */}
//         <Box textAlign="center" mt={4}>
//           <Button
//             variant="outlined"
//             color="error"
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default Admin;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const cards = [
    { title: "Manage Users", desc: "View, edit or remove users", route: "/usersmg", btnText: "Manage Users" },
    { title: "Manage Courses", desc: "Add, update or delete courses", route: "/coursesmg", btnText: "Manage Courses" },
    { title: "Manage Colleges", desc: "Update college details", route: "/collegesmg", btnText: "Manage Colleges" },
    { title: "Manage Exams", desc: "Update exam details", route: "/Exammg", btnText: "Manage Exams" },
    { title: "Manage Career Paths", desc: "Update career paths details", route: "/careerpathsmg", btnText: "Career Paths" },
    { title: "Manage Tests", desc: "Update test details", route: "/testmg", btnText: "Manage Tests" },
  ];

  const cardStyle = {
    p: 3,
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0px 12px 20px rgba(255,165,0,0.6)",
    },
  };

  const buttonStyle = {
    mt: 2,
    background: "linear-gradient(45deg, #ff9800, #ff5722)",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      background: "linear-gradient(45deg, #ffb74d, #ff7043)",
    },
  };

  return (
    <Box sx={{ pt: 12, minHeight: "100vh", background: "linear-gradient(135deg, #141e30, #243b55, #141e30)" }}>
  <Container>
    <Typography variant="h4" align="center" gutterBottom sx={{ color: "#fff" }}>
      🛠 Admin Dashboard
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="rgba(255,255,255,0.7)"
      sx={{ mb: 4 }}
    >
      Welcome, Admin! Manage your application here.
    </Typography>
    {/* ...rest of the content */}
 
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item xs={12} md={6} lg={4} key={card.title}>
              <Paper sx={cardStyle}>
                <Typography variant="h6" sx={{ color: "#ff9800", mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  {card.desc}
                </Typography>
                <Button
                  sx={buttonStyle}
                  onClick={() => navigate(card.route)}
                  variant="contained"
                >
                  {card.btnText}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
            variant="outlined"
            color="error"
            sx={{ fontWeight: "bold" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Admin;
