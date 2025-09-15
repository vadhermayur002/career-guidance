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
} from "@mui/material";

function CATTest() {
  // 🔹 Sample Questions
  const questions = [
    {
      id: 1,
      question: "If x = 2, what is the value of 3x + 5?",
      options: ["9", "10", "11", "12"],
      answer: "11",
    },
    {
      id: 2,
      question: "Which of the following is the synonym of 'Candid'?",
      options: ["Secretive", "Honest", "Fake", "Silent"],
      answer: "Honest",
    },
    {
      id: 3,
      question: "If a train travels 60 km in 1.5 hours, what is its speed?",
      options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
      answer: "40 km/h",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Handle answer selection
  const handleChange = (qId, value) => {
    setUserAnswers({ ...userAnswers, [qId]: value });
  };

  // Handle submit
  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          CAT Practice Test
        </Typography>

        {!submitted ? (
          <>
            {questions.map((q) => (
              <Paper key={q.id} sx={{ p: 2, mt: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1">
                  {q.id}. {q.question}
                </Typography>
                <FormControl>
                  <RadioGroup
                    value={userAnswers[q.id] || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  >
                    {q.options.map((opt, i) => (
                      <FormControlLabel
                        key={i}
                        value={opt}
                        control={<Radio />}
                        label={opt}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Paper>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, backgroundColor: "#1a237e" }}
              onClick={handleSubmit}
            >
              Submit Test
            </Button>
          </>
        ) : (
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: 4, fontWeight: "bold" }}
          >
            ✅ Your Score: {score} / {questions.length}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default CATTest;
