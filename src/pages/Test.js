import React from "react";
import { Container, Typography, Grid, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (testName) => {
    navigate(`/test/${testName.toLowerCase()}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        📝 Choose Your Test
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* UPSC */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              UPSC
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNavigate("upsctest")}
            >
              Start UPSC
            </Button>
          </Paper>
        </Grid>

        {/* IIT */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              IIT
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNavigate("iittest")}
            >
              Start IIT
            </Button>
          </Paper>
        </Grid>

        {/* SSC */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              SSC
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleNavigate("ssctest")}
            >
              Start SSC
            </Button>
          </Paper>
        </Grid>

        {/* CAT */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              CAT
            </Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleNavigate("cattest")}
            >
              Start CAT
            </Button>
          </Paper>
        </Grid>

        {/* NEET */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              NEET
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleNavigate("neettest")}
            >
              Start NEET
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Test;
