import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
} from "@mui/material";

function Admin() {
  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ mt: 5, p: 4, borderRadius: 3, boxShadow: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Admin Dashboard
        </Typography>

        <Typography variant="subtitle1" align="center" color="text.secondary">
          Welcome, Admin! Manage your application here.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          {/* Manage Users */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Typography variant="h6">Manage Users</Typography>
              <Typography variant="body2" color="text.secondary">
                View, edit or remove users
              </Typography>

               <Button onClick={() => navigate("/usersmg")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#1a237e" }}
              >
                Manage Users 
              </Button>
            </Paper>
          </Grid>

          {/* Manage Courses */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Typography variant="h6">Manage Courses</Typography>
              <Typography variant="body2" color="text.secondary">
                Add, update or delete courses
              </Typography>
              <Button onClick={() => navigate("/coursesmg")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#1a237e" }}
              >
                Manage Courses 
              </Button>
            </Paper>
          </Grid>

          {/* Manage Colleges */}
            <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Typography variant="h6">Manage College</Typography>
              <Typography variant="body2" color="text.secondary">
                Update college details
              </Typography>
               <Button onClick={() => navigate("/collegesmg")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#1a237e" }}
              >
                Manage Colleges
              </Button>
            </Paper>
          </Grid>
         
        

        
          {/* Manage Exams */}
            <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Typography variant="h6">Manage Exam</Typography>
              <Typography variant="body2" color="text.secondary">
                Update Exam details
              </Typography>
               <Button onClick={() => navigate("/Exammg")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#1a237e" }}
              >
                Manage Exams 
              </Button>
            </Paper>
          </Grid>
        

         
          {/* Manage career paths*/}
            <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Typography variant="h6">Manage Exam</Typography>
              <Typography variant="body2" color="text.secondary">
                Update Career paths details
              </Typography>
               <Button onClick={() => navigate("/careerpathsmg")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#1a237e" }}
              >
               career paths
              </Button>
            </Paper>
          </Grid>
 
           </Grid>

        {/* Logout */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Admin;
