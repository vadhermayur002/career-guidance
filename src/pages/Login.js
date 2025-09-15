import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const data = res.data;

      // Save token and role in localStorage
      localStorage.setItem("token", data.token || "user-token");
      localStorage.setItem("role", data.role);
      localStorage.setItem("isLoggedIn", true);

      // Redirect based on role
      if (data.role === "admin") navigate("/admin");
      else navigate("/Menu");

    } catch (err) {
      alert(err.response?.data?.msg || "Error connecting to server");
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
        p: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 6, backgroundColor: "rgba(0,0,0,0.7)" }}>
          <Typography variant="h5" fontWeight="bold" align="center" color="white" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#1a237e" }}
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
