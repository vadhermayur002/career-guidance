// src/pages/CareerPathsMg.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";

function CareerPathsMg() {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState({
    title: "",
    roles: [],
    skills: [],
    futureScope: "",
  });

  const [rolesInput, setRolesInput] = useState("");
  const [skillsInput, setSkillsInput] = useState("");

  // Fetch all career paths
  const fetchPaths = () => {
    axios
      .get("http://localhost:5000/api/career_paths")
      .then((res) => {
        setPaths(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPaths();
  }, []);

  // Open add/edit dialog
  const handleOpen = (path = null) => {
    if (path) {
      setCurrentPath(path);
      setRolesInput(path.roles.join(", "));
      setSkillsInput(path.skills.join(", "));
    } else {
      setCurrentPath({ title: "", roles: [], skills: [], futureScope: "" });
      setRolesInput("");
      setSkillsInput("");
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Add or update career path
  const handleSave = () => {
    const data = {
      ...currentPath,
      roles: rolesInput.split(",").map((r) => r.trim()),
      skills: skillsInput.split(",").map((s) => s.trim()),
    };

    if (currentPath._id) {
      axios
        .put(`http://localhost:5000/api/career_paths/${currentPath._id}`, data)
        .then(() => {
          fetchPaths();
          handleClose();
        });
    } else {
      axios.post("http://localhost:5000/api/career_paths", data).then(() => {
        fetchPaths();
        handleClose();
      });
    }
  };

  // Delete career path
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this career path?")) {
      axios.delete(`http://localhost:5000/api/career_paths/${id}`).then(() => fetchPaths());
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Manage Career Paths
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 3 }} onClick={() => handleOpen()}>
        Add Career Path
      </Button>

      <Grid container spacing={3}>
        {paths.map((path) => (
          <Grid item xs={12} md={6} lg={4} key={path._id}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {path.title}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">Roles:</Typography>
                  {path.roles.map((role, idx) => (
                    <Chip key={idx} label={role} sx={{ mr: 0.5, mt: 0.5 }} />
                  ))}
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">Skills:</Typography>
                  {path.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} color="secondary" sx={{ mr: 0.5, mt: 0.5 }} />
                  ))}
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Future Scope:</strong> {path.futureScope}
                </Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => handleOpen(path)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(path._id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{currentPath._id ? "Edit Career Path" : "Add Career Path"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={currentPath.title}
            onChange={(e) => setCurrentPath({ ...currentPath, title: e.target.value })}
          />
          <TextField
            label="Roles (comma separated)"
            fullWidth
            margin="normal"
            value={rolesInput}
            onChange={(e) => setRolesInput(e.target.value)}
          />
          <TextField
            label="Skills (comma separated)"
            fullWidth
            margin="normal"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
          />
          <TextField
            label="Future Scope"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={currentPath.futureScope}
            onChange={(e) => setCurrentPath({ ...currentPath, futureScope: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default CareerPathsMg;
