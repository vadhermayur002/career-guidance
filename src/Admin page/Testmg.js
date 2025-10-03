import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

function Testmg() {
  const [tests, setTests] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [testName, setTestName] = useState("");
  const [editTestId, setEditTestId] = useState(null);

  // Question states
  const [qText, setQText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [editQId, setEditQId] = useState(null);

  // Fetch tests
  const fetchTests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tests");
      setTests(res.data);
    } catch (err) {
      console.error("Error fetching tests:", err.response?.status, err.response?.data);
    }
  };

  // Fetch questions for a test
  const fetchQuestions = async (testId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tests/${testId}/questions`);
      setQuestions(res.data);
    } catch (err) {
      console.error("Error fetching questions:", err.response?.status, err.response?.data);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  // Create / Update test
  const handleTestSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editTestId) {
        await axios.put(`http://localhost:5000/api/tests/${editTestId}`, { name: testName });
      } else {
        await axios.post("http://localhost:5000/api/tests", { name: testName });
      }
      fetchTests();
      setTestName("");
      setEditTestId(null);
    } catch (err) {
      console.error("Error saving test:", err.response?.data);
    }
  };

  const handleDeleteTest = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tests/${id}`);
      fetchTests();
      setQuestions([]);
    } catch (err) {
      console.error("Error deleting test:", err.response?.data);
    }
  };

  const handleEditTest = (test) => {
    setTestName(test.name);
    setEditTestId(test._id);
    fetchQuestions(test._id);
  };

  // Create / Update question
  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQ = { question: qText, options, answer };

      if (editQId) {
        await axios.put(`http://localhost:5000/api/questions/${editQId}`, newQ);
      } else {
        await axios.post(`http://localhost:5000/api/tests/${editTestId}/questions`, newQ);
      }

      fetchQuestions(editTestId);
      setQText("");
      setOptions(["", "", "", ""]);
      setAnswer("");
      setEditQId(null);
    } catch (err) {
      console.error("Error saving question:", err.response?.data);
    }
  };

  const handleEditQuestion = (q) => {
    setQText(q.question);
    setOptions(q.options);
    setAnswer(q.answer);
    setEditQId(q._id);
  };

  const handleDeleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/questions/${id}`);
      fetchQuestions(editTestId);
    } catch (err) {
      console.error("Error deleting question:", err.response?.data);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛠 Manage Tests
      </Typography>

      {/* Create Test */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <form onSubmit={handleTestSubmit}>
          <TextField
            fullWidth
            label="Test Name (e.g. UPSC, SSC, IIT)"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {editTestId ? "Update Test" : "Add Test"}
          </Button>
        </form>
      </Paper>

      {/* Available Tests */}
      <Grid container spacing={3}>
        {tests.map((t) => (
          <Grid item xs={12} md={6} lg={4} key={t._id}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6">{t.name}</Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleEditTest(t)}
                    sx={{ mr: 1 }}
                  >
                    Manage
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteTest(t._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Manage Questions */}
      {editTestId && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">Questions for {testName}</Typography>
          <Paper sx={{ p: 3, mt: 2 }}>
            <form onSubmit={handleQuestionSubmit}>
              <TextField
                fullWidth
                label="Question Text"
                value={qText}
                onChange={(e) => setQText(e.target.value)}
                sx={{ mb: 2 }}
              />
              {options.map((opt, i) => (
                <TextField
                  key={i}
                  fullWidth
                  label={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[i] = e.target.value;
                    setOptions(newOptions);
                  }}
                  sx={{ mb: 2 }}
                />
              ))}
              <TextField
                fullWidth
                label="Correct Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained">
                {editQId ? "Update Question" : "Add Question"}
              </Button>
            </form>
          </Paper>

          {/* Questions List */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {questions.map((q) => (
              <Grid item xs={12} key={q._id}>
                <Paper sx={{ p: 2 }}>
                  <Typography>{q.question}</Typography>
                  <ul>
                    {q.options.map((opt, idx) => (
                      <li key={idx}>{opt}</li>
                    ))}
                  </ul>
                  <Typography color="green">Answer: {q.answer}</Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleEditQuestion(q)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDeleteQuestion(q._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Testmg;
