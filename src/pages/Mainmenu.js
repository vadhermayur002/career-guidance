import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import SchoolIcon from "@mui/icons-material/School";   // For Colleges
import QuizIcon from "@mui/icons-material/Quiz";       // For Tests

function Mainmenu() {
  const navigate = useNavigate();

  const handleProtectedNavigation = (path) => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate(path);
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  const menuItems = [
    { title: "Home", desc: "Welcome to Career Guidance", icon: <HomeIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/menu" },
   { title: "Colleges", desc: "Top institutes & universities", icon: <SchoolIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/colleges" },
    { title: "Courses", desc: "Explore trending courses", icon: <BookIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/courses" },
    { title: "Exams", desc: "Competitive exams", icon: <AssignmentIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/exams" },
    { title: "Tests", desc: "Practice & mock tests", icon: <QuizIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/test" },
    { title: "Tools", desc: "Self-assessment & resume", icon: <BuildIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/tools" },
    { title: "Blog", desc: "Career advice & trends", icon: <ArticleIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/blog" },
    { title: "Resources", desc: "E-books & videos", icon: <FolderIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/resources" },
     { title: "About", desc: "Our mission & vision", icon: <InfoIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/about" },
    { title: "Career Paths", desc: "Find your career journey", icon: <WorkIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/careerpaths" },
    { title: "Contact", desc: "Reach out to us", icon: <ContactMailIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/contact" },
    { title: "Logout", desc: "Logout", icon: <LoginIcon sx={{ fontSize: 60, color: "#ff9800" }} />, path: "/login" },
    
  ];

  return (
    <Box sx={{ bgcolor: "#0d1117", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 10,
          height: "50vh",
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
            Main Menu
          </Typography>
          <Typography variant="h6" mt={2}>
            Explore Careers, Courses, Exams, Tools & More
          </Typography>
        </Box>
      </Box>

      {/* Menu Cards */}
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
                onClick={() => handleProtectedNavigation(item.path)}
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

export default Mainmenu;
