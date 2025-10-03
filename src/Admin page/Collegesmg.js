
//  import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Box,
// } from "@mui/material";

// function Collegesmg() {
//   const [colleges, setColleges] = useState([]);
//   const [name, setName] = useState("");
//   const [courses, setCourses] = useState("");
//   const [fees, setFees] = useState("");
//   const [website, setWebsite] = useState("");
//   const [image, setImage] = useState("");
//   const [editId, setEditId] = useState(null);

//   // ✅ Fetch colleges from backend
//   const fetchColleges = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/colleges");
//       setColleges(res.data);
//     } catch (err) {
//       console.error("Error fetching colleges:", err);
//     }
//   };

//   useEffect(() => {
//     fetchColleges();
//   }, []);

//   // ✅ Add or Update College
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newCollege = {
//       name,
//       courses: courses.split(",").map((c) => c.trim()), // ensure array
//       fees,
//       website,
//       image,
//     };

//     try {
//       if (editId) {
//         await axios.put(
//           `http://localhost:5000/api/colleges/${editId}`,
//           newCollege
//         );
//       } else {
//         await axios.post("http://localhost:5000/api/colleges", newCollege);
//       }

//       fetchColleges();
//       resetForm();
//     } catch (err) {
//       console.error("Error saving college:", err);
//     }
//   };

//   // ✅ Reset form
//   const resetForm = () => {
//     setEditId(null);
//     setName("");
//     setCourses("");
//     setFees("");
//     setWebsite("");
//     setImage("");
//   };

//   // ✅ Delete College
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/colleges/${id}`);
//       fetchColleges();
//     } catch (err) {
//       console.error("Error deleting college:", err);
//     }
//   };

//   // ✅ Edit College
//   const handleEdit = (college) => {
//     setName(college.name);
//     setCourses(college.courses.join(", "));
//     setFees(college.fees);
//     setWebsite(college.website);
//     setImage(college.image);
//     setEditId(college._id);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         🎓 Admin Panel - Manage Colleges
//       </Typography>

//       {/* Add / Edit Form */}
//       <Paper sx={{ p: 3, mb: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="College Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={{ mt: 2 }}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Courses (comma separated)"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Fees"
//             value={fees}
//             onChange={(e) => setFees(e.target.value)}
//             sx={{ mt: 2 }}
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
//           <Box display="flex" justifyContent="space-between" mt={2}>
//             <Button type="submit" variant="contained" color="primary">
//               {editId ? "Update College" : "Add College"}
//             </Button>
//             {editId && (
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={resetForm}
//               >
//                 Cancel Edit
//               </Button>
//             )}
//           </Box>
//         </form>
//       </Paper>

//       {/* Colleges List */}
//       <Grid container spacing={3}>
//         {colleges.map((college) => (
//           <Grid item xs={12} md={6} lg={4} key={college._id}>
//             <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
//               <Box textAlign="center">
//                 {college.image && (
//                   <img
//                     src={college.image}
//                     alt={college.name}
//                     style={{
//                       width: "120px",
//                       height: "120px",
//                       objectFit: "contain",
//                       marginBottom: "10px",
//                     }}
//                   />
//                 )}
//                 <Typography variant="h6">{college.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <strong>Courses:</strong> {college.courses.join(", ")}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <strong>Fees:</strong> {college.fees}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <strong>Website:</strong>{" "}
//                   <a
//                     href={college.website}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {college.website}
//                   </a>
//                 </Typography>
//                 <Box mt={2}>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     size="small"
//                     onClick={() => handleEdit(college)}
//                     sx={{ mr: 1 }}
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     size="small"
//                     onClick={() => handleDelete(college._id)}
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

// export default Collegesmg;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
} from "@mui/material";

function Collegesmg() {
  const [colleges, setColleges] = useState([]);
  const [name, setName] = useState("");
  const [courses, setCourses] = useState("");
  const [fees, setFees] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchColleges = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/colleges");
      setColleges(res.data);
    } catch (err) {
      console.error("Error fetching colleges:", err);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCollege = {
      name,
      courses: courses.split(",").map((c) => c.trim()),
      fees,
      website,
      image,
    };
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/colleges/${editId}`, newCollege);
      } else {
        await axios.post("http://localhost:5000/api/colleges", newCollege);
      }
      fetchColleges();
      resetForm();
    } catch (err) {
      console.error("Error saving college:", err);
    }
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setCourses("");
    setFees("");
    setWebsite("");
    setImage("");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/colleges/${id}`);
      fetchColleges();
    } catch (err) {
      console.error("Error deleting college:", err);
    }
  };

  const handleEdit = (college) => {
    setName(college.name);
    setCourses(college.courses.join(", "));
    setFees(college.fees);
    setWebsite(college.website);
    setImage(college.image);
    setEditId(college._id);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55, #141e30)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff", mb: 4 }}
        >
          🎓 Admin Panel - Manage Colleges
        </Typography>

        {/* Add / Edit Form */}
        <Paper
          sx={{
            p: 3,
            mb: 4,
            backgroundColor: "#fff", // White inside
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="College Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mt: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Courses (comma separated)"
              value={courses}
              onChange={(e) => setCourses(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                {editId ? "Update College" : "Add College"}
              </Button>
              {editId && (
                <Button variant="outlined" color="secondary" onClick={resetForm}>
                  Cancel Edit
                </Button>
              )}
            </Box>
          </form>
        </Paper>

        {/* Colleges List */}
        <Grid container spacing={3}>
          {colleges.map((college) => (
            <Grid item xs={12} md={6} lg={4} key={college._id}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#fff", // White inside
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.3)" },
                }}
              >
                <Box textAlign="center">
                  {college.image && (
                    <img
                      src={college.image}
                      alt={college.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                    />
                  )}
                  <Typography variant="h6">{college.name}</Typography>
                  <Typography variant="body2">
                    <strong>Courses:</strong> {college.courses.join(", ")}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Fees:</strong> {college.fees}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Website:</strong>{" "}
                    <a href={college.website} target="_blank" rel="noreferrer">
                      {college.website}
                    </a>
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(college)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(college._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Collegesmg;
