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

// function Exammg() {
//   const [exams, setExams] = useState([]);
//   const [name, setName] = useState("");
//   const [conductedBy, setConductedBy] = useState("");
//   const [eligibility, setEligibility] = useState("");
//   const [ageLimit, setAgeLimit] = useState("");
//   const [salary, setSalary] = useState("");
//   const [stages, setStages] = useState("");
//   const [freeCourse, setFreeCourse] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   // Load exams from localStorage
//   useEffect(() => {
//     const storedExams = JSON.parse(localStorage.getItem("exams")) || [];
//     setExams(storedExams);
//   }, []);

//   // Save exams to localStorage
//   useEffect(() => {
//     localStorage.setItem("exams", JSON.stringify(exams));
//   }, [exams]);

//   // Add or Update Exam
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newExam = {
//       name,
//       conductedBy,
//       eligibility,
//       ageLimit,
//       salary,
//       stages,
//       freeCourse
//     };

//     if (editIndex !== null) {
//       const updatedExams = [...exams];
//       updatedExams[editIndex] = newExam;
//       setExams(updatedExams);
//       setEditIndex(null);
//     } else {
//       setExams([...exams, newExam]);
//     }

//     // Reset form
//     setName("");
//     setConductedBy("");
//     setEligibility("");
//     setAgeLimit("");
//     setSalary("");
//     setStages("");
//     setFreeCourse("");
//   };

//   // Delete Exam
//   const handleDelete = (index) => {
//     const updatedExams = exams.filter((_, i) => i !== index);
//     setExams(updatedExams);
//   };

//   // Edit Exam
//   const handleEdit = (index) => {
//     const exam = exams[index];
//     setName(exam.name);
//     setConductedBy(exam.conductedBy);
//     setEligibility(exam.eligibility);
//     setAgeLimit(exam.ageLimit);
//     setSalary(exam.salary);
//     setStages(exam.stages);
//     setFreeCourse(exam.freeCourse);
//     setEditIndex(index);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         📝 Admin Panel - Manage Exams
//       </Typography>

//       {/* Add / Edit Form */}
//       <Paper sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h6">
//           {editIndex !== null ? "Update Exam" : "Add New Exam"}
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Exam Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={{ mt: 2 }}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Conducted By"
//             value={conductedBy}
//             onChange={(e) => setConductedBy(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Eligibility"
//             value={eligibility}
//             onChange={(e) => setEligibility(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Age Limit"
//             value={ageLimit}
//             onChange={(e) => setAgeLimit(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Salary"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Exam Stages"
//             value={stages}
//             onChange={(e) => setStages(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Free Course Link"
//             value={freeCourse}
//             onChange={(e) => setFreeCourse(e.target.value)}
//             sx={{ mt: 2 }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//           >
//             {editIndex !== null ? "Update Exam" : "Add Exam"}
//           </Button>
//         </form>
//       </Paper>

//       {/* Exams List */}
//       <Grid container spacing={3}>
//         {exams.map((exam, index) => (
//           <Grid item xs={12} md={6} lg={4} key={index}>
//             <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
//               <Box textAlign="center">
//                 <Typography variant="h6">{exam.name}</Typography>
//                 <Typography variant="body2">
//                   <strong>Conducted By:</strong> {exam.conductedBy}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Eligibility:</strong> {exam.eligibility}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Age Limit:</strong> {exam.ageLimit}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Salary:</strong> {exam.salary}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Exam Stages:</strong> {exam.stages}
//                 </Typography>
//                 {exam.freeCourse && (
//                   <a
//                     href={exam.freeCourse}
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{ color: "#1976d2", textDecoration: "none" }}
//                   >
//                     📘 Free Course
//                   </a>
//                 )}
//                 <Box mt={2}>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
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

// export default Exammg;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper, Grid, Box } from "@mui/material";

function Exammg() {
  const [exams, setExams] = useState([]);
  const [name, setName] = useState("");
  const [conductedBy, setConductedBy] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [salary, setSalary] = useState("");
  const [stages, setStages] = useState("");
  const [freeCourse, setFreeCourse] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch exams from backend
  const fetchExams = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/exams");
      setExams(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  // Add or update exam
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExam = { name, conductedBy, eligibility, ageLimit, salary, stages, freeCourse };

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/exams/${editId}`, newExam);
      } else {
        await axios.post("http://localhost:5000/api/exams", newExam);
      }
      fetchExams();
      // Reset form
      setEditId(null);
      setName("");
      setConductedBy("");
      setEligibility("");
      setAgeLimit("");
      setSalary("");
      setStages("");
      setFreeCourse("");
    } catch (err) {
      console.error(err);
    }
  };

  // Delete exam
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/exams/${id}`);
      fetchExams();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit exam
  const handleEdit = (exam) => {
    setName(exam.name);
    setConductedBy(exam.conductedBy);
    setEligibility(exam.eligibility);
    setAgeLimit(exam.ageLimit);
    setSalary(exam.salary);
    setStages(exam.stages);
    setFreeCourse(exam.freeCourse);
    setEditId(exam._id);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>📝 Manage Exams</Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Exam Name" value={name} onChange={e => setName(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Conducted By" value={conductedBy} onChange={e => setConductedBy(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Eligibility" value={eligibility} onChange={e => setEligibility(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Age Limit" value={ageLimit} onChange={e => setAgeLimit(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Salary" value={salary} onChange={e => setSalary(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Exam Stages" value={stages} onChange={e => setStages(e.target.value)} sx={{ mt: 2 }} />
          <TextField fullWidth label="Free Course Link" value={freeCourse} onChange={e => setFreeCourse(e.target.value)} sx={{ mt: 2 }} />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>{editId ? "Update" : "Add"}</Button>
        </form>
      </Paper>

      <Grid container spacing={3}>
        {exams.map((e) => (
          <Grid item xs={12} md={6} lg={4} key={e._id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{e.name}</Typography>
              <Typography><strong>Conducted By:</strong> {e.conductedBy}</Typography>
              <Typography><strong>Eligibility:</strong> {e.eligibility}</Typography>
              <Typography><strong>Age Limit:</strong> {e.ageLimit}</Typography>
              <Typography><strong>Salary:</strong> {e.salary}</Typography>
              <Typography><strong>Stages:</strong> {e.stages}</Typography>
              <Typography>
                <a href={e.freeCourse} target="_blank" rel="noopener noreferrer">📘 Free Course</a>
              </Typography>
              <Box mt={2}>
                <Button variant="outlined" size="small" onClick={() => handleEdit(e)} sx={{ mr: 1 }}>Edit</Button>
                <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(e._id)}>Delete</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Exammg;
