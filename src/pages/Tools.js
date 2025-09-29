import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Tools = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    about: "",
    phone: "",
    email: "",
    address: "",
    skills: [],
    languages: [],
    education: [],
    projects: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [eduInput, setEduInput] = useState({ start: "", end: "", school: "", standard: "" });
  const [projInput, setProjInput] = useState({ start: "", end: "", title: "", description: "" });

  // Handle general change
  const handleChange = (field, value) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

  // Add skill
  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput],
      }));
      setSkillInput("");
    }
  };

  // Add education
  const addEducation = () => {
    if (eduInput.school && eduInput.standard) {
      setResumeData((prev) => ({
        ...prev,
        education: [...prev.education, eduInput],
      }));
      setEduInput({ start: "", end: "", school: "", standard: "" });
    }
  };

  // Add project
  const addProject = () => {
    if (projInput.title && projInput.description) {
      setResumeData((prev) => ({
        ...prev,
        projects: [...prev.projects, projInput],
      }));
      setProjInput({ start: "", end: "", title: "", description: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={4}>
        {/* LEFT FORM */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Fill Resume Data
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="dense"
              value={resumeData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <TextField
              fullWidth
              label="Title / Designation"
              margin="dense"
              value={resumeData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <TextField
              fullWidth
              label="About Me"
              margin="dense"
              multiline
              minRows={2}
              value={resumeData.about}
              onChange={(e) => handleChange("about", e.target.value)}
            />

            <TextField
              fullWidth
              label="Phone"
              margin="dense"
              value={resumeData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <TextField
              fullWidth
              label="Email"
              margin="dense"
              value={resumeData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <TextField
              fullWidth
              label="Address"
              margin="dense"
              value={resumeData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />

            {/* Skills */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Skills</Typography>
              <TextField
                fullWidth
                label="Add Skill"
                margin="dense"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
              <Button variant="outlined" size="small" onClick={addSkill}>
                Add
              </Button>
            </Box>

            {/* Education */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Education</Typography>
              <TextField
                fullWidth
                label="Start Date"
                margin="dense"
                value={eduInput.start}
                onChange={(e) => setEduInput({ ...eduInput, start: e.target.value })}
              />
              <TextField
                fullWidth
                label="End Date"
                margin="dense"
                value={eduInput.end}
                onChange={(e) => setEduInput({ ...eduInput, end: e.target.value })}
              />
              <TextField
                fullWidth
                label="School / College"
                margin="dense"
                value={eduInput.school}
                onChange={(e) => setEduInput({ ...eduInput, school: e.target.value })}
              />
              <TextField
                fullWidth
                label="Standard / Degree"
                margin="dense"
                value={eduInput.standard}
                onChange={(e) => setEduInput({ ...eduInput, standard: e.target.value })}
              />
              <Button variant="outlined" size="small" onClick={addEducation}>
                Add
              </Button>
            </Box>

            {/* Projects */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Projects</Typography>
              <TextField
                fullWidth
                label="Start Date"
                margin="dense"
                value={projInput.start}
                onChange={(e) => setProjInput({ ...projInput, start: e.target.value })}
              />
              <TextField
                fullWidth
                label="End Date"
                margin="dense"
                value={projInput.end}
                onChange={(e) => setProjInput({ ...projInput, end: e.target.value })}
              />
              <TextField
                fullWidth
                label="Title"
                margin="dense"
                value={projInput.title}
                onChange={(e) => setProjInput({ ...projInput, title: e.target.value })}
              />
              <TextField
                fullWidth
                label="Description"
                margin="dense"
                multiline
                minRows={2}
                value={projInput.description}
                onChange={(e) =>
                  setProjInput({ ...projInput, description: e.target.value })
                }
              />
              <Button variant="outlined" size="small" onClick={addProject}>
                Add
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT PREVIEW */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3}>
            {/* Header */}
            <Box
              sx={{ bgcolor: "#2c3e50", color: "#fff", p: 3, textAlign: "center" }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {resumeData.name || "Your Name"}
              </Typography>
              <Typography variant="subtitle1">
                {resumeData.title || "Your Title"}
              </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
              {/* About Me */}
              {resumeData.about && (
                <>
                  <Typography variant="h6">About Me</Typography>
                  <Typography sx={{ mb: 2 }}>{resumeData.about}</Typography>
                </>
              )}

              {/* Contact */}
              {(resumeData.phone || resumeData.email || resumeData.address) && (
                <>
                  <Typography variant="h6">Contact</Typography>
                  {resumeData.phone && (
                    <Typography fontSize="14px">
                      <Phone fontSize="small" sx={{ mr: 1 }} />
                      {resumeData.phone}
                    </Typography>
                  )}
                  {resumeData.email && (
                    <Typography fontSize="14px">
                      <Email fontSize="small" sx={{ mr: 1 }} />
                      {resumeData.email}
                    </Typography>
                  )}
                  {resumeData.address && (
                    <Typography fontSize="14px">
                      <LocationOn fontSize="small" sx={{ mr: 1 }} />
                      {resumeData.address}
                    </Typography>
                  )}
                  <Box sx={{ mb: 2 }} />
                </>
              )}

              {/* Education */}
              {resumeData.education.length > 0 && (
                <>
                  <Typography variant="h6">Education</Typography>
                  {resumeData.education.map((e, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Typography fontSize="14px">
                        {e.start} - {e.end}
                      </Typography>
                      <Typography fontWeight="bold">{e.school}</Typography>
                      <Typography>{e.standard}</Typography>
                    </Box>
                  ))}
                </>
              )}

              {/* Skills */}
              {resumeData.skills.length > 0 && (
                <>
                  <Typography variant="h6">Skills</Typography>
                  <ul>
                    {resumeData.skills.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Projects */}
              {resumeData.projects.length > 0 && (
                <>
                  <Typography variant="h6">Projects</Typography>
                  {resumeData.projects.map((p, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Typography fontSize="14px">
                        {p.start} - {p.end}
                      </Typography>
                      <Typography fontWeight="bold">{p.title}</Typography>
                      <Typography>{p.description}</Typography>
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tools;
