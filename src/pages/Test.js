import React from "react";
import { Container, Typography, Grid, Button, Card, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (testName) => {
    navigate(`/test/${testName.toLowerCase()}`);
  };

  const tests = [
    { name: "UPSC", color: "secondary" },
    { name: "IIT", color: "primary" },
    { name: "SSC", color: "success" },
    { name: "CAT", color: "warning" },
    { name: "NEET", color: "error" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url("https://cdn.pixabay.com/photo/2016/11/18/12/52/achievement-1836974_1280.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.6)",
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            maxWidth: "700px",
          }}
        >
          <Typography variant="h3" fontWeight="bold" color="orange">
            Practice Mock Tests
          </Typography>
          <Typography variant="h6" mt={2} color="gray.300">
            Choose your exam and get started with preparation
          </Typography>
        </Box>
      </Box>

      {/* Test Cards Section */}
      <Box sx={{ py: 6, backgroundColor: "#121212", minHeight: "100vh" }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {tests.map((test) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={test.name}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 6,
                    backgroundColor: "#1e1e1e",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 12, transform: "scale(1.05)" },
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {test.name}
                    </Typography>
                    <Button
                      variant="contained"
                      color={test.color}
                      onClick={() => handleNavigate(`${test.name}test`)}
                      sx={{
                        mt: 2,
                        borderRadius: 3,
                        px: 3,
                        fontWeight: "bold",
                      }}
                    >
                      Start {test.name}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Test;
