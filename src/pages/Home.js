import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleProtectedNavigation = (path) => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate(path);
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0d1117" }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(13,17,23,0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              cursor: "pointer",
              color: "#ff9800",
            }}
            onClick={() => navigate("/")}
          >
            Career Guidance
          </Typography>
          {localStorage.getItem("isLoggedIn") ? (
            <Button
              sx={{
                color: "white",
                border: "1px solid #ff9800",
                borderRadius: "25px",
                px: 3,
                "&:hover": { background: "#ff9800", color: "black" },
              }}
              onClick={handleLogout}
            >
              Login 
            </Button>
          ) : (
            <Button
              sx={{
                background: "linear-gradient(45deg, #ff9800, #ff5722)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "25px",
                px: 3,
                "&:hover": { background: "linear-gradient(45deg,#ff5722,#ff9800)" },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 3,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg,#ff9800,#ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Shape Your Future
          </Typography>
          <Typography variant="h6" mb={4}>
            Discover colleges, courses, exams & practice tests – all in one
            platform.
          </Typography>
          <Button
            size="large"
            sx={{
              background: "linear-gradient(45deg,#ff9800,#ff5722)",
              color: "white",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1.1rem",
              "&:hover": {
                background: "linear-gradient(45deg,#ff5722,#ff9800)",
                boxShadow: "0px 0px 20px rgba(255,152,0,0.8)",
              },
            }}
            onClick={() => handleProtectedNavigation("/login")}
          >
            Get Started 🚀
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          background: "#161b22",
          py: 10,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            mb={6}
            sx={{ color: "#ff9800" }}
          >
            What We Offer
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Colleges",
                icon: <SchoolIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
                desc: "Find top institutes for your future",
              },
              {
                title: "Courses",
                icon: <BookIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
                desc: "Explore trending subjects",
              },
              {
                title: "Exams",
                icon: (
                  <AssignmentIcon sx={{ fontSize: 60, color: "#ff9800" }} />
                ),
                desc: "Prepare with smart strategies",
              },
              {
                title: "Test",
                icon: <QuizIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
                desc: "Evaluate your knowledge",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    cursor: "pointer",
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(12px)",
                    color: "white",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
                    },
                  }}
                  onClick={() => handleProtectedNavigation("/login")}
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
      </Box>

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

export default Home;
