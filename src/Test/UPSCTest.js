// // src/Test/UPSCTest.js
// import React, { useState } from "react";

// // ------------------ Questions Data ------------------
// const questions = [

//   {
//     id: 1,
//     question: "Who is the first President of India?",
//     options: ["Mahatma Gandhi", "Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
//     answer: "Rajendra Prasad",
//   },
//   {
//     id: 2,
//     question: "Which is the largest planet in the Solar System?",
//     options: ["Earth", "Jupiter", "Saturn", "Mars"],
//     answer: "Jupiter",
//   },
//   {
//     id: 3,
//     question: "The Constitution of India was adopted in which year?",
//     options: ["1947", "1950", "1952", "1949"],
//     answer: "1949",
//   },
//   {
//     id: 4,
//     question: "Which Article of the Indian Constitution deals with Right to Equality?",
//     options: ["Article 12", "Article 14", "Article 16", "Article 21"],
//     answer: "Article 14",
//   },
//   {
//     id: 5,
//     question: "Which country is known as the Land of Rising Sun?",
//     options: ["China", "Japan", "Korea", "Thailand"],
//     answer: "Japan",
//   },
//   {
//     id: 6,
//     question: "What is the capital of Madhya Pradesh?",
//     options: ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
//     answer: "Bhopal",
//   },
//   {
//     id: 7,
//     question: "Who wrote the national anthem of India?",
//     options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu"],
//     answer: "Rabindranath Tagore",
//   },
//   {
//     id: 8,
//     question: "Which Indian state is known as the ‘Spice Garden of India’?",
//     options: ["Kerala", "Goa", "Tamil Nadu", "Assam"],
//     answer: "Kerala",
//   },
//   {
//     id: 9,
//     question: "Who was the first woman Prime Minister of India?",
//     options: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj"],
//     answer: "Indira Gandhi",
//   },
//   {
//     id: 10,
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Venus", "Mercury"],
//     answer: "Mars",
//   },
//   {
//     id: 11,
//     question: "Who is known as the Father of the Indian Constitution?",
//     options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
//     answer: "B. R. Ambedkar",
//   },
//   {
//     id: 12,
//     question: "Which river is known as the Ganga of the South?",
//     options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
//     answer: "Godavari",
//   },
//   {
//     id: 13,
//     question: "Who was the first Indian to win a Nobel Prize?",
//     options: ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"],
//     answer: "Rabindranath Tagore",
//   },
//   {
//     id: 14,
//     question: "What is the currency of Japan?",
//     options: ["Yuan", "Yen", "Won", "Dollar"],
//     answer: "Yen",
//   },
//   {
//     id: 15,
//     question: "Which is the longest river in India?",
//     options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
//     answer: "Ganga",
//   },
//   {
//     id: 16,
//     question: "Who was the first Governor-General of independent India?",
//     options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Rajendra Prasad"],
//     answer: "Lord Mountbatten",
//   },
//   {
//     id: 17,
//     question: "Which state is the largest producer of wheat in India?",
//     options: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
//     answer: "Uttar Pradesh",
//   },
//   {
//     id: 18,
//     question: "What is the capital of Australia?",
//     options: ["Sydney", "Melbourne", "Canberra", "Perth"],
//     answer: "Canberra",
//   },
//   {
//     id: 19,
//     question: "Who is known as the Missile Man of India?",
//     options: ["Vikram Sarabhai", "A. P. J. Abdul Kalam", "Homi Bhabha", "Satish Dhawan"],
//     answer: "A. P. J. Abdul Kalam",
//   },
//   {
//     id: 20,
//     question: "Which Indian state has the longest coastline?",
//     options: ["Kerala", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
//     answer: "Gujarat",
//   },
//   {
//     id: 21,
//     question: "Which country gifted the Statue of Liberty to the USA?",
//     options: ["England", "Germany", "France", "Spain"],
//     answer: "France",
//   },
//   {
//     id: 22,
//     question: "In which year was the Battle of Plassey fought?",
//     options: ["1757", "1764", "1857", "1707"],
//     answer: "1757",
//   },
//   {
//     id: 23,
//     question: "Which gas is essential for photosynthesis?",
//     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
//     answer: "Carbon Dioxide",
//   },
//   {
//     id: 24,
//     question: "Who was the first Indian astronaut to go into space?",
//     options: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Vikram Ambalal"],
//     answer: "Rakesh Sharma",
//   },
//   {
//     id: 25,
//     question: "Which Mughal emperor built the Taj Mahal?",
//     options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
//     answer: "Shah Jahan",
//   },
//   {
//     id: 26,
//     question: "What is the national animal of India?",
//     options: ["Lion", "Tiger", "Elephant", "Leopard"],
//     answer: "Tiger",
//   },
//   {
//     id: 27,
//     question: "What is the SI unit of force?",
//     options: ["Newton", "Joule", "Watt", "Pascal"],
//     answer: "Newton",
//   },
//   {
//     id: 28,
//     question: "Which Indian city is known as the ‘City of Joy’?",
//     options: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
//     answer: "Kolkata",
//   },
//   {
//     id: 29,
//     question: "Who is the author of the book ‘Discovery of India’?",
//     options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rabindranath Tagore"],
//     answer: "Jawaharlal Nehru",
//   },
//   {
//     id: 30,
//     question: "Which element is essential for the formation of hemoglobin in blood?",
//     options: ["Calcium", "Iron", "Magnesium", "Potassium"],
//     answer: "Iron",
//   }
// ];

// const UPSCTest = () => {
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleOptionChange = (qId, option) => {
//     setAnswers({ ...answers, [qId]: option });
//   };

//   const handleSubmit = () => {
//     let correct = 0;
//     let wrong = 0;
//     let skipped = 0;

//     questions.forEach((q) => {
//       if (!answers[q.id]) {
//         skipped++;
//       } else if (answers[q.id] === q.answer) {
//         correct++;
//       } else {
//         wrong++;
//       }
//     });

//     setResult({
//       total: questions.length,
//       correct,
//       wrong,
//       skipped,
//       score: correct * 1, // each correct = 1 mark
//     });

//     setSubmitted(true);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2 style={{ textAlign: "center" }}>UPSC Test</h2>

//       {!submitted ? (
//         <div>
//           {questions.map((q, index) => (
//             <div
//               key={q.id}
//               style={{
//                 padding: "15px",
//                 marginBottom: "10px",
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//               }}
//             >
//               <p>
//                 <b>Q{index + 1}:</b> {q.question}
//               </p>
//               {q.options.map((option, i) => (
//                 <div key={i}>
//                   <label>
//                     <input
//                       type="radio"
//                       name={`question-${q.id}`}
//                       value={option}
//                       checked={answers[q.id] === option}
//                       onChange={() => handleOptionChange(q.id, option)}
//                     />
//                     {" "}{option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}

//           <button
//             onClick={handleSubmit}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               fontSize: "16px",
//               cursor: "pointer",
//               background: "#1976d2",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", marginTop: "30px" }}>
//           <h3>Test Submitted ✅</h3>
//           <p>Total Questions: {result.total}</p>
//           <p>Correct: {result.correct}</p>
//           <p>Wrong: {result.wrong}</p>
//           <p>Skipped: {result.skipped}</p>
//           <p><b>Final Score: {result.score} / {result.total}</b></p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UPSCTest;


// src/Test/UPSCTest.js
import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, Container, Typography, LinearProgress } from "@mui/material";

// ------------------ Questions Data ------------------
const questions = [

  {
    id: 1,
    question: "Who is the first President of India?",
    options: ["Mahatma Gandhi", "Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
    answer: "Rajendra Prasad",
  },
  {
    id: 2,
    question: "Which is the largest planet in the Solar System?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    id: 3,
    question: "The Constitution of India was adopted in which year?",
    options: ["1947", "1950", "1952", "1949"],
    answer: "1949",
  },
  {
    id: 4,
    question: "Which Article of the Indian Constitution deals with Right to Equality?",
    options: ["Article 12", "Article 14", "Article 16", "Article 21"],
    answer: "Article 14",
  },
  {
    id: 5,
    question: "Which country is known as the Land of Rising Sun?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: "Japan",
  },
  {
    id: 6,
    question: "What is the capital of Madhya Pradesh?",
    options: ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
    answer: "Bhopal",
  },
  {
    id: 7,
    question: "Who wrote the national anthem of India?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu"],
    answer: "Rabindranath Tagore",
  },
  {
    id: 8,
    question: "Which Indian state is known as the ‘Spice Garden of India’?",
    options: ["Kerala", "Goa", "Tamil Nadu", "Assam"],
    answer: "Kerala",
  },
  {
    id: 9,
    question: "Who was the first woman Prime Minister of India?",
    options: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj"],
    answer: "Indira Gandhi",
  },
  {
    id: 10,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mars",
  },
  {
    id: 11,
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
    answer: "B. R. Ambedkar",
  },
  {
    id: 12,
    question: "Which river is known as the Ganga of the South?",
    options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
    answer: "Godavari",
  },
  {
    id: 13,
    question: "Who was the first Indian to win a Nobel Prize?",
    options: ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"],
    answer: "Rabindranath Tagore",
  },
  {
    id: 14,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    answer: "Yen",
  },
  {
    id: 15,
    question: "Which is the longest river in India?",
    options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
    answer: "Ganga",
  },
  {
    id: 16,
    question: "Who was the first Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Rajendra Prasad"],
    answer: "Lord Mountbatten",
  },
  {
    id: 17,
    question: "Which state is the largest producer of wheat in India?",
    options: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    answer: "Uttar Pradesh",
  },
  {
    id: 18,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    id: 19,
    question: "Who is known as the Missile Man of India?",
    options: ["Vikram Sarabhai", "A. P. J. Abdul Kalam", "Homi Bhabha", "Satish Dhawan"],
    answer: "A. P. J. Abdul Kalam",
  },
  {
    id: 20,
    question: "Which Indian state has the longest coastline?",
    options: ["Kerala", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
    answer: "Gujarat",
  },
  {
    id: 21,
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["England", "Germany", "France", "Spain"],
    answer: "France",
  },
  {
    id: 22,
    question: "In which year was the Battle of Plassey fought?",
    options: ["1757", "1764", "1857", "1707"],
    answer: "1757",
  },
  {
    id: 23,
    question: "Which gas is essential for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    id: 24,
    question: "Who was the first Indian astronaut to go into space?",
    options: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Vikram Ambalal"],
    answer: "Rakesh Sharma",
  },
  {
    id: 25,
    question: "Which Mughal emperor built the Taj Mahal?",
    options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    answer: "Shah Jahan",
  },
  {
    id: 26,
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    answer: "Tiger",
  },
  {
    id: 27,
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: "Newton",
  },
  {
    id: 28,
    question: "Which Indian city is known as the ‘City of Joy’?",
    options: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
    answer: "Kolkata",
  },
  {
    id: 29,
    question: "Who is the author of the book ‘Discovery of India’?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rabindranath Tagore"],
    answer: "Jawaharlal Nehru",
  },
  {
    id: 30,
    question: "Which element is essential for the formation of hemoglobin in blood?",
    options: ["Calcium", "Iron", "Magnesium", "Potassium"],
    answer: "Iron",
  }
];


const UPSCTest = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  // Timer (15 minutes = 900 sec, change as you like)
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    if (submitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleOptionChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = () => {
    let correct = 0, wrong = 0, skipped = 0;
    questions.forEach((q) => {
      if (!answers[q.id]) skipped++;
      else if (answers[q.id] === q.answer) correct++;
      else wrong++;
    });

    setResult({
      total: questions.length,
      correct,
      wrong,
      skipped,
      score: correct,
    });
    setSubmitted(true);
  };

  // Format time (mm:ss)
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", py: 5, color: "white" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom color="orange">
          📝 UPSC Mock Test
        </Typography>

        {/* Timer */}
        {!submitted && (
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h6">⏳ Time Left: {formatTime(timeLeft)}</Typography>
            <LinearProgress
              variant="determinate"
              value={(timeLeft / 900) * 100}
              sx={{ mt: 1, height: 10, borderRadius: 5 }}
              color="warning"
            />
          </Box>
        )}

        {/* Questions */}
        {!submitted ? (
          <Box>
            {questions.map((q, index) => (
              <Card
                key={q.id}
                sx={{
                  mb: 3,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  p: 2,
                  color: "white",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    <b>Q{index + 1}:</b> {q.question}
                  </Typography>
                  {q.options.map((option, i) => (
                    <Box key={i} sx={{ mb: 1 }}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option}
                          checked={answers[q.id] === option}
                          onChange={() => handleOptionChange(q.id, option)}
                        />
                        {" "} {option}
                      </label>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            ))}

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ px: 4, py: 1.5, borderRadius: 3 }}
              >
                Submit Test
              </Button>
            </Box>
          </Box>
        ) : (
          // Results
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h5" gutterBottom>✅ Test Submitted</Typography>
            <Typography>Total Questions: {result.total}</Typography>
            <Typography>Correct: {result.correct}</Typography>
            <Typography>Wrong: {result.wrong}</Typography>
            <Typography>Skipped: {result.skipped}</Typography>
            <Typography variant="h6" color="orange" sx={{ mt: 2 }}>
              Final Score: {result.score} / {result.total}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default UPSCTest;
