import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("All");

  // Fetch from backend
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/colleges");
        setColleges(res.data);
      } catch (err) {
        console.error("Error fetching colleges:", err);
      }
    };

    fetchColleges();
  }, []);

  // Hardcoded fallback courses (from your first code)
  const fallbackCourses = [
    "B.Tech",
    "M.Tech",
    "MBA",
    "PhD",
    "B.E",
    "M.E",
    "Arts",
    "Science",
    "Commerce",
    "Law",
  ];

  // Unique courses: backend courses + fallback courses
  const uniqueCourses = [
    "All",
    ...new Set([
      ...colleges.flatMap((c) => c.courses || []),
      ...fallbackCourses,
    ]),
  ];

  // Filter colleges based on selected course
  const filteredColleges =
    selectedCourse === "All"
      ? colleges
      : colleges.filter((c) => c.courses?.includes(selectedCourse));

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
            Explore Top Colleges
          </Typography>
          <Typography variant="h6" mt={2} color="gray.300">
            Choose the best institute to shape your career
          </Typography>
        </Box>
      </Box>

      {/* Colleges Section */}
      <Box sx={{ py: 6, backgroundColor: "#121212", minHeight: "100vh" }}>
        <Container>
          {/* Filter Dropdown */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <FormControl
              sx={{
                minWidth: 250,
                backgroundColor: "#1e1e1e",
                borderRadius: 2,
                boxShadow: 2,
                color: "white",
              }}
            >
              <InputLabel sx={{ color: "white" }}>Filter by Course</InputLabel>
              <Select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                sx={{
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "orange" },
                  ".MuiSvgIcon-root": { color: "white" },
                }}
              >
                {uniqueCourses.map((course, index) => (
                  <MenuItem key={index} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Colleges Grid */}
          <Grid container spacing={4}>
            {filteredColleges.map((college) => (
              <Grid item xs={12} sm={6} md={4} key={college._id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 6,
                    backgroundColor: "#1e1e1e",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 12, transform: "scale(1.03)" },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <Box
                    sx={{
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    {college.image && (
                      <CardMedia
                        component="img"
                        image={college.image}
                        alt={college.name}
                        sx={{
                          maxHeight: "80%",
                          maxWidth: "80%",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {college.name}
                    </Typography>
                    <Typography variant="body2" color="gray.400">
                      <b>Courses:</b> {college.courses?.join(", ")}
                    </Typography>
                    <Typography variant="body2" color="gray.400" gutterBottom>
                      <b>Fees:</b> {college.fees}
                    </Typography>

                    <Button
                      variant="contained"
                      href={college.website}
                      target="_blank"
                      sx={{
                        mt: 2,
                        borderRadius: 3,
                        background: "linear-gradient(45deg, #ff9800, #ff5722)",
                        fontWeight: "bold",
                        "&:hover": {
                          background: "linear-gradient(45deg,#ff5722,#ff9800)",
                          boxShadow: "0px 0px 12px rgba(255,152,0,0.7)",
                        },
                      }}
                    >
                      Visit Website
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

export default Colleges;
