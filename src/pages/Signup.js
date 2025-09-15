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

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 🔹 Make sure the URL matches your backend
      const res = await axios.post("http://localhost:5000/api/signup", {
        name: fullName,
        email,
        password
      });

      if (res.status === 201) {
        alert("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      // 🔹 Show proper error message
      if (err.response) {
        alert(err.response.data.msg || "Error signing up.");
      } else {
        alert("Error connecting to server. Make sure backend is running on http://localhost:5000");
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/06/17/12/books-3582413_1280.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 6, backgroundColor: "rgba(0,0,0,0.7)" }}>
          <Typography variant="h5" fontWeight="bold" align="center" color="white" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSignup}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#1a237e" }}>
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
