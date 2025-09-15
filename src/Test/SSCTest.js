// src/Test/SSCTest.js
import React, { useState } from "react";

// ------------------ SSC Mock Questions ------------------
const questions = [
  {
    id: 1,
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
    answer: "Jawaharlal Nehru",
  },
  {
    id: 2,
    question: "Simplify: 25 × 25 = ?",
    options: ["525", "650", "625", "600"],
    answer: "625",
  },
  {
    id: 3,
    question: "Which gas is essential for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    id: 4,
    question: "If A is the brother of B, and B is the sister of C, how is A related to C?",
    options: ["Brother", "Sister", "Father", "Uncle"],
    answer: "Brother",
  },
  {
    id: 5,
    question: "Synonym of 'Rapid' is?",
    options: ["Slow", "Fast", "Dull", "Lazy"],
    answer: "Fast",
  },
  {
    id: 6,
    question: "Which Mughal ruler built the Taj Mahal?",
    options: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
    answer: "Shah Jahan",
  },
  {
    id: 7,
    question: "The average of 10 and 20 is?",
    options: ["30", "15", "10", "20"],
    answer: "15",
  },
  {
    id: 8,
    question: "Blood is purified in which organ?",
    options: ["Heart", "Lungs", "Kidney", "Liver"],
    answer: "Kidney",
  },
  {
    id: 9,
    question: "Which one is odd: Mango, Banana, Apple, Potato?",
    options: ["Mango", "Banana", "Apple", "Potato"],
    answer: "Potato",
  },
  {
    id: 10,
    question: "Antonym of 'Honest' is?",
    options: ["Truthful", "Sincere", "Dishonest", "Faithful"],
    answer: "Dishonest",
  },
];

const SSCTest = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleOptionChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((q) => {
      if (!answers[q.id]) {
        skipped++;
      } else if (answers[q.id] === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    setResult({
      total: questions.length,
      correct,
      wrong,
      skipped,
      score: correct * 2 - wrong * 0.5, // SSC style (+2, -0.5)
    });

    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>SSC Mock Test</h2>

      {!submitted ? (
        <div>
          {questions.map((q, index) => (
            <div
              key={q.id}
              style={{
                padding: "15px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <p>
                <b>Q{index + 1}:</b> {q.question}
              </p>
              {q.options.map((option, i) => (
                <div key={i}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleOptionChange(q.id, option)}
                    />
                    {" "}{option}
                  </label>
                </div>
              ))}
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              background: "#388e3c",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h3>Test Submitted ✅</h3>
          <p>Total Questions: {result.total}</p>
          <p>Correct: {result.correct}</p>
          <p>Wrong: {result.wrong}</p>
          <p>Skipped: {result.skipped}</p>
          <p><b>Final Score: {result.score} / {result.total * 2}</b></p>
        </div>
      )}
    </div>
  );
};

export default SSCTest;
