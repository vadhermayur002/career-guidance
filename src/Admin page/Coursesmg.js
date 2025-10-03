// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, TextField, Button, Typography, Paper, Grid, Box } from "@mui/material";

// function Coursesmg() {
//   const [courses, setCourses] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [duration, setDuration] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Fetch courses from backend
//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/courses");
//       setCourses(res.data);
//     } catch (error) {
//       console.error("Error fetching courses:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Add or update course
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newCourse = { title, description, duration };

//     try {
//       if (editId) {
//         await axios.put(`http://localhost:5000/api/courses/${editId}`, newCourse);
//       } else {
//         await axios.post("http://localhost:5000/api/courses", newCourse);
//       }
//       fetchCourses();
//       setEditId(null);
//       setTitle("");
//       setDescription("");
//       setDuration("");
//     } catch (error) {
//       console.error("Error saving course:", error.message);
//     }
//   };

//   // Delete course
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/courses/${id}`);
//       fetchCourses();
//     } catch (error) {
//       console.error("Error deleting course:", error.message);
//     }
//   };

//   // Edit course
//   const handleEdit = (course) => {
//     setTitle(course.title);
//     setDescription(course.description);
//     setDuration(course.duration);
//     setEditId(course._id);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         📘 Manage Courses
//       </Typography>

//       <Paper sx={{ p: 3, mb: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Course Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Duration"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//             {editId ? "Update" : "Add"}
//           </Button>
//         </form>
//       </Paper>

//       <Grid container spacing={3}>
//         {courses.map((c) => (
//           <Grid item xs={12} md={6} lg={4} key={c._id}>
//             <Paper sx={{ p: 2 }}>
//               <Typography variant="h6">{c.title}</Typography>
//               <Typography>{c.description}</Typography>
//               <Typography>{c.duration}</Typography>
//               <Box mt={2}>
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   onClick={() => handleEdit(c)}
//                   sx={{ mr: 1 }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   size="small"
//                   onClick={() => handleDelete(c._id)}
//                 >
//                   Delete
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Coursesmg;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper, Grid, Box } from "@mui/material";

function Coursesmg() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [courseType, setCourseType] = useState(""); // matches backend 'course'
  const [duration, setDuration] = useState("");
  const [website, setWebsite] = useState(""); // matches backend 'website'
  const [image, setImage] = useState(""); // matches backend 'image'
  const [editId, setEditId] = useState(null);

  // Fetch courses from backend
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Add or update course
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Course title is required");

    const newCourse = { title, course: courseType, duration, website, image };

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/courses/${editId}`, newCourse);
        alert("Course updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/courses", newCourse);
        alert("Course added successfully");
      }

      setEditId(null);
      setTitle("");
      setCourseType("");
      setDuration("");
      setWebsite("");
      setImage("");
      fetchCourses();
    } catch (err) {
      console.error("Error saving course:", err);
      alert("Failed to save course");
    }
  };

  // Delete a course
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  // Edit a course
  const handleEdit = (course) => {
    setTitle(course.title);
    setCourseType(course.course || "");
    setDuration(course.duration || "");
    setWebsite(course.website || "");
    setImage(course.image || "");
    setEditId(course._id);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#ff9800" }}>
        📘 Manage Courses
      </Typography>

      {/* Add / Edit Form */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: "#1e1e1e" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mt: 2, input: { color: "#fff" } }}
          />
          <TextField
            fullWidth
            label="Category / Type"
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            sx={{ mt: 2, input: { color: "#fff" } }}
          />
          <TextField
            fullWidth
            label="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            sx={{ mt: 2, input: { color: "#fff" } }}
          />
          <TextField
            fullWidth
            label="Website URL"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            sx={{ mt: 2, input: { color: "#fff" } }}
          />
          <TextField
            fullWidth
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{ mt: 2, input: { color: "#fff" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, background: "linear-gradient(45deg, #ff9800, #ff5722)" }}
          >
            {editId ? "Update Course" : "Add Course"}
          </Button>
        </form>
      </Paper>

      {/* Courses Grid */}
      <Grid container spacing={3}>
        {courses.map((c) => (
          <Grid item xs={12} md={6} lg={4} key={c._id}>
            <Paper sx={{ p: 2, backgroundColor: "#1e1e1e" }}>
              {c.image && (
                <img
                  src={c.image}
                  alt={c.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
              )}
              <Typography variant="h6" sx={{ mt: 1, color: "#ff9800" }}>
                {c.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                <strong>Category:</strong> {c.course || "-"}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                <strong>Duration:</strong> {c.duration || "-"}
              </Typography>
              {c.website && (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "8px 12px",
                    background: "linear-gradient(45deg, #ff9800, #ff5722)",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Visit Website
                </a>
              )}
              <Box mt={2}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEdit(c)}
                  sx={{ mr: 1, color: "#ff9800", borderColor: "#ff9800" }}
                >
                  Edit
                </Button>
                <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(c._id)}>
                  Delete
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Coursesmg;
