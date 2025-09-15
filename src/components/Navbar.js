// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(13,17,23,0.85)", // same as Menu background
        backdropFilter: "blur(8px)",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar>
        {/* App Title */}
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

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              "&:hover": { color: "#ff9800" },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/colleges"
            sx={{
              color: "white",
              "&:hover": { color: "#ff9800" },
            }}
          >
            Colleges
          </Button>
          <Button
            component={Link}
            to="/courses"
            sx={{
              color: "white",
              "&:hover": { color: "#ff9800" },
            }}
          >
            Courses
          </Button>
          <Button
            component={Link}
            to="/exams"
            sx={{
              color: "white",
              "&:hover": { color: "#ff9800" },
            }}
          >
            Exams
          </Button>
          <Button
            component={Link}
            to="/test"
            sx={{
              color: "white",
              "&:hover": { color: "#ff9800" },
            }}
          >
            Tests
          </Button>

          {!localStorage.getItem("isLoggedIn") ? (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{
                  background: "linear-gradient(45deg,#ff9800,#ff5722)",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 2,
                  "&:hover": {
                    background: "linear-gradient(45deg,#ff5722,#ff9800)",
                  },
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                sx={{
                  background: "linear-gradient(45deg,#ff9800,#ff5722)",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 2,
                  "&:hover": {
                    background: "linear-gradient(45deg,#ff5722,#ff9800)",
                  },
                }}
              >
                Signup
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              sx={{
                color: "white",
                border: "1px solid #ff9800",
                borderRadius: "25px",
                px: 3,
                "&:hover": { background: "#ff9800", color: "black" },
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
