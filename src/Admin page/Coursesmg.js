// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Box
// } from "@mui/material";

// function Coursesmg() {
//   const [courses, setCourses] = useState([]);
//   const [name, setName] = useState("");
//   const [website, setWebsite] = useState("");
//   const [image, setImage] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   // ✅ Load courses from localStorage
//   useEffect(() => {
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     setCourses(storedCourses);
//   }, []);

//   // ✅ Save courses to localStorage
//   useEffect(() => {
//     localStorage.setItem("courses", JSON.stringify(courses));
//   }, [courses]);

//   // ✅ Add or Update Course
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newCourse = { name, website, image };

//     if (editIndex !== null) {
//       const updatedCourses = [...courses];
//       updatedCourses[editIndex] = newCourse;
//       setCourses(updatedCourses);
//       setEditIndex(null);
//     } else {
//       setCourses([...courses, newCourse]);
//     }

//     // Reset form
//     setName("");
//     setWebsite("");
//     setImage("");
//   };

//   // ✅ Delete Course
//   const handleDelete = (index) => {
//     setCourses(courses.filter((_, i) => i !== index));
//   };

//   // ✅ Edit Course
//   const handleEdit = (index) => {
//     const c = courses[index];
//     setName(c.name);
//     setWebsite(c.website);
//     setImage(c.image);
//     setEditIndex(index);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         📘 Admin Panel - Manage Courses
//       </Typography>

//       {/* Add / Edit Form */}
//       <Paper sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h6">
//           {editIndex !== null ? "Update Course" : "Add New Course"}
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Course Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={{ mt: 2 }}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Website"
//             value={website}
//             onChange={(e) => setWebsite(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             sx={{ mt: 2 }}
//           />

//           <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//             {editIndex !== null ? "Update Course" : "Add Course"}
//           </Button>
//         </form>
//       </Paper>

//       {/* Courses List */}
//       <Grid container spacing={3}>
//         {courses.map((c, index) => (
//           <Grid item xs={12} md={6} lg={4} key={index}>
//             <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
//               <Box textAlign="center">
//                 {c.image && (
//                   <img
//                     src={c.image}
//                     alt={c.name}
//                     style={{
//                       width: "100px",
//                       height: "100px",
//                       objectFit: "contain",
//                       marginBottom: "10px"
//                     }}
//                   />
//                 )}
//                 <Typography variant="h6">{c.name}</Typography>

//                 {c.website && (
//                   <a
//                     href={c.website}
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{ color: "#1976d2", textDecoration: "none" }}
//                   >
//                     Visit Website
//                   </a>
//                 )}

//                 <Box mt={2}>
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     onClick={() => handleEdit(index)}
//                     sx={{ mr: 1 }}
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     size="small"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Delete
//                   </Button>
//                 </Box>
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
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = { title, description, duration };
    if (editId) {
      await axios.put(`http://localhost:5000/api/courses/${editId}`, newCourse);
    } else {
      await axios.post("http://localhost:5000/api/courses", newCourse);
    }
    fetchCourses();
    setEditId(null);
    setTitle("");
    setDescription("");
    setDuration("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/courses/${id}`);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setTitle(course.title);
    setDescription(course.description);
    setDuration(course.duration);
    setEditId(course._id);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>📘 Manage Courses</Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Course Title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} sx={{ mt: 2 }} />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>{editId ? "Update" : "Add"}</Button>
        </form>
      </Paper>
      <Grid container spacing={3}>
        {courses.map((c) => (
          <Grid item xs={12} md={6} lg={4} key={c._id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{c.title}</Typography>
              <Typography>{c.description}</Typography>
              <Typography>{c.duration}</Typography>
              <Box mt={2}>
                <Button variant="outlined" size="small" onClick={() => handleEdit(c)} sx={{ mr: 1 }}>Edit</Button>
                <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(c._id)}>Delete</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Coursesmg;
