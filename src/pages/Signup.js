import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button, Box } from "@mui/material";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password.length < 5 || password.length > 10) {
      alert("Password must be between 5 and 10 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name: fullName,
        email,
        password,
      });

      if (res.status === 201) {
        alert("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        alert(err.response.data.msg || "Error signing up.");
      } else {
        alert("Error connecting to server. Make sure backend is running.");
      }
    }
  };

  // Custom Navbar logic
  const handleProtectedNav = (path) => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate(path);
    } else {
      alert("Please login first!");
    }
  };

  const buttonStyle = { color: "white", "&:hover": { color: "#ff9800" } };
  const loginSignupStyle = {
    background: "linear-gradient(45deg,#ff9800,#ff5722)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px",
    px: 2,
    "&:hover": { background: "linear-gradient(45deg,#ff5722,#ff9800)" },
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

      {/* Signup Form */}
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
            Sign Up
          </Typography>

          <form onSubmit={handleSignup}>
            {[
              { label: "Full Name", value: fullName, setter: setFullName },
              { label: "Email", value: email, setter: setEmail, type: "email" },
              { label: "Password", value: password, setter: setPassword, type: "password" },
              { label: "Confirm Password", value: confirmPassword, setter: setConfirmPassword, type: "password" },
            ].map((field, index) => (
              <TextField
                key={index}
                label={field.label}
                type={field.type || "text"}
                fullWidth
                margin="normal"
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                required
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: {
                    color: "white",
                    backgroundColor: "rgba(50,50,50,0.5)",
                    borderRadius: 4,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#ff9800" },
                    "&.Mui-focused fieldset": { borderColor: "#ff9800" },
                  },
                }}
              />
            ))}
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
              Sign Up
            </Button>
          </form>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2" color="white">
              Already have an account?{" "}
              <Button onClick={() => navigate("/login")} sx={{ color: "#ffeb3b" }}>
                Login
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
