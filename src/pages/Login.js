import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      const data = res.data;

      localStorage.setItem("token", data.token || "user-token");
      localStorage.setItem("role", data.role);
      localStorage.setItem("isLoggedIn", true);

      if (data.role === "admin") navigate("/admin");
      else navigate("/menu");
    } catch (err) {
      alert(err.response?.data?.msg || "Error connecting to server");
    }
  };

  const handleProtectedNav = (path) => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate(path);
    } else {
      alert("Please login first!");
    }
  };

  const buttonStyle = {
    color: "white",
    "&:hover": { color: "#ff9800" },
  };

  const loginSignupStyle = {
    background: "linear-gradient(45deg,#ff9800,#ff5722)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px",
    px: 2,
    "&:hover": {
      background: "linear-gradient(45deg,#ff5722,#ff9800)",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), 
          url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Custom Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
          background: "rgba(13,17,23,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#ff9800", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Career Guidance
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button sx={buttonStyle} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button sx={buttonStyle} onClick={() => handleProtectedNav("/colleges")}>
            Colleges
          </Button>
          <Button sx={buttonStyle} onClick={() => handleProtectedNav("/courses")}>
            Courses
          </Button>
          <Button sx={buttonStyle} onClick={() => handleProtectedNav("/exams")}>
            Exams
          </Button>
          <Button sx={buttonStyle} onClick={() => handleProtectedNav("/test")}>
            Tests
          </Button>
          <Button sx={loginSignupStyle} onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button sx={loginSignupStyle} onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </Box>
      </Box>

      {/* Login Form */}
      <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 8 }}>
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: 6,
            backgroundColor: "rgba(20,20,20,0.9)",
            border: "1px solid #333",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            color="white"
            gutterBottom
          >
            Login
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#ccc" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "rgba(50,50,50,0.5)", borderRadius: 4 },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff9800" },
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#ccc" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "rgba(50,50,50,0.5)", borderRadius: 4 },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#ff9800" },
                  "&.Mui-focused fieldset": { borderColor: "#ff9800" },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                background: "linear-gradient(45deg,#ff9800,#ff5722)",
                "&:hover": { background: "linear-gradient(45deg,#ff5722,#ff9800)" },
              }}
            >
              Login
            </Button>
          </form>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2" color="white">
              Don’t have an account?{" "}
              <Button onClick={() => navigate("/signup")} sx={{ color: "#ffeb3b" }}>
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
