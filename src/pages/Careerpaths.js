// src/pages/CareerPaths.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";

function CareerPaths() {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareerPaths = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/career_paths");
        setPaths(res.data);
      } catch (err) {
        console.error("Error fetching career paths:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerPaths();
  }, []);

  if (loading)
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        Loading Career Paths...
      </Typography>
    );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)), url("https://cdn.pixabay.com/photo/2017/03/21/03/55/startup-2166956_1280.jpg")`,
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
            Explore Career Paths
          </Typography>
          <Typography variant="h6" mt={2} color="gray.300">
            Find the right career journey for you
          </Typography>
        </Box>
      </Box>

      {/* Career Cards */}
      <Box sx={{ py: 6, backgroundColor: "#121212", minHeight: "100vh" }}>
        <Container>
          <Grid container spacing={4}>
            {paths.map((path) => (
              <Grid item xs={12} sm={6} md={4} key={path._id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 6,
                    backgroundColor: "#1e1e1e",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 12, transform: "scale(1.03)" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {path.title}
                    </Typography>

                    <Box sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Roles:
                      </Typography>
                      {path.roles.map((role, index) => (
                        <Chip
                          key={index}
                          label={role}
                          sx={{ mr: 0.5, mt: 0.5, backgroundColor: "#ff9800", color: "#121212" }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Skills:
                      </Typography>
                      {path.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          color="secondary"
                          sx={{ mr: 0.5, mt: 0.5 }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Future Scope:
                      </Typography>
                      <Typography variant="body2">{path.futureScope}</Typography>
                    </Box>

                    {path.website && (
                      <Button
                        variant="contained"
                        href={path.website}
                        target="_blank"
                        sx={{
                          mt: "auto",
                          borderRadius: 3,
                          background: "linear-gradient(45deg, #ff9800, #ff5722)",
                          fontWeight: "bold",
                          "&:hover": {
                            background: "linear-gradient(45deg,#ff5722,#ff9800)",
                            boxShadow: "0px 0px 12px rgba(255,152,0,0.7)",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    )}
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

export default CareerPaths;
