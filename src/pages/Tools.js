import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Box,
} from "@mui/material";

function Tools() {
  // QUIZ STATE
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [careerSuggestion, setCareerSuggestion] = useState("");

  // RESUME STATE
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    experience: "",
  });

  // Sample Quiz Questions
  const questions = [
    {
      q: "Which subject do you enjoy most?",
      options: ["Math/Logic", "Biology", "Arts & Design", "Business"],
    },
    {
      q: "What type of work do you prefer?",
      options: ["Problem Solving", "Helping People", "Creative Work", "Leadership"],
    },
  ];

  // Handle Quiz Answer
  const handleAnswer = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const finishQuiz = () => {
    // Simple suggestion logic
    if (answers[0] === "Math/Logic") setCareerSuggestion("Engineering / IT");
    else if (answers[0] === "Biology") setCareerSuggestion("Medical / Research");
    else if (answers[0] === "Arts & Design") setCareerSuggestion("Creative Arts / Media");
    else if (answers[0] === "Business") setCareerSuggestion("Management / Finance");
    else setCareerSuggestion("Explore multiple fields");
  };

  // Handle Resume Change
  const handleResumeChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Career Tools
      </Typography>

      {/* QUIZ SECTION */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Self-Assessment Quiz
        </Typography>

        {quizStep < questions.length ? (
          <Box>
            <Typography>{questions[quizStep].q}</Typography>
            <FormControl>
              <RadioGroup
                onChange={(e) => handleAnswer(quizStep, e.target.value)}
              >
                {questions[quizStep].options.map((opt, i) => (
                  <FormControlLabel
                    key={i}
                    value={opt}
                    control={<Radio />}
                    label={opt}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => setQuizStep(quizStep + 1)}
            >
              Next
            </Button>
          </Box>
        ) : (
          <Box>
            <Button variant="contained" onClick={finishQuiz}>
              Show Suggestion
            </Button>
            {careerSuggestion && (
              <Typography variant="h6" sx={{ mt: 2 }}>
                Suggested Career Path: {careerSuggestion}
              </Typography>
            )}
          </Box>
        )}
      </Paper>

      {/* RESUME BUILDER SECTION */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Resume Builder (Basic)
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Full Name" name="name" onChange={handleResumeChange} />
          <TextField label="Email" name="email" onChange={handleResumeChange} />
          <TextField label="Education" name="education" onChange={handleResumeChange} />
          <TextField label="Skills" name="skills" onChange={handleResumeChange} />
          <TextField
            label="Experience"
            name="experience"
            multiline
            rows={3}
            onChange={handleResumeChange}
          />
        </Box>

        {/* Resume Preview */}
        <Box sx={{ mt: 3, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
          <Typography variant="h6">Resume Preview</Typography>
          <Typography><b>Name:</b> {resumeData.name}</Typography>
          <Typography><b>Email:</b> {resumeData.email}</Typography>
          <Typography><b>Education:</b> {resumeData.education}</Typography>
          <Typography><b>Skills:</b> {resumeData.skills}</Typography>
          <Typography><b>Experience:</b> {resumeData.experience}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Tools;
