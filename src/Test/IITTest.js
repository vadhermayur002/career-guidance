// src/Test/IITTest.js
import React, { useState } from "react";

// ------------------ Questions Data ------------------
const questions = [
  // ---------- Physics ----------
  {
    id: 1,
    question: "The SI unit of electric charge is?",
    options: ["Ampere", "Coulomb", "Volt", "Ohm"],
    answer: "Coulomb",
  },
  {
    id: 2,
    question: "A body is thrown vertically upward with velocity u. The maximum height reached is?",
    options: ["u²/2g", "u²/g", "2u²/g", "u/g"],
    answer: "u²/2g",
  },
  {
    id: 3,
    question: "The dimensional formula of Power is?",
    options: ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "M⁰L⁰T⁰"],
    answer: "ML²T⁻³",
  },
  {
    id: 4,
    question: "Which law explains the relationship between current, voltage and resistance?",
    options: ["Newton’s Law", "Ohm’s Law", "Faraday’s Law", "Ampere’s Law"],
    answer: "Ohm’s Law",
  },
  {
    id: 5,
    question: "If force is doubled and mass is halved, acceleration becomes?",
    options: ["Same", "Double", "Four times", "Half"],
    answer: "Four times",
  },

  // ---------- Chemistry ----------
  {
    id: 6,
    question: "The pH of neutral solution at 25°C is?",
    options: ["0", "7", "14", "1"],
    answer: "7",
  },
  {
    id: 7,
    question: "Which element has highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Nitrogen", "Chlorine"],
    answer: "Fluorine",
  },
  {
    id: 8,
    question: "Avogadro’s number is approximately?",
    options: ["6.022 × 10²³", "3.0 × 10⁸", "1.6 × 10⁻¹⁹", "9.8 m/s²"],
    answer: "6.022 × 10²³",
  },
  {
    id: 9,
    question: "Which gas is called laughing gas?",
    options: ["CO₂", "N₂O", "O₃", "NO₂"],
    answer: "N₂O",
  },
  {
    id: 10,
    question: "In the periodic table, ionization energy increases?",
    options: ["Down a group", "Across a period", "Randomly", "None"],
    answer: "Across a period",
  },

  // ---------- Math ----------
  {
    id: 11,
    question: "Derivative of sinx is?",
    options: ["cosx", "-cosx", "-sinx", "1"],
    answer: "cosx",
  },
  {
    id: 12,
    question: "∫ dx/x = ?",
    options: ["x", "ln|x| + C", "1/x", "e^x"],
    answer: "ln|x| + C",
  },
  {
    id: 13,
    question: "The solution of equation x² - 5x + 6 = 0 is?",
    options: ["x=2,3", "x=1,6", "x=0,6", "x=3,6"],
    answer: "x=2,3",
  },
  {
    id: 14,
    question: "If tanθ = 1, then θ equals?",
    options: ["0°", "30°", "45°", "60°"],
    answer: "45°",
  },
  {
    id: 15,
    question: "The sum of first n natural numbers is?",
    options: ["n²", "n(n+1)/2", "n(n-1)/2", "2n"],
    answer: "n(n+1)/2",
  },

  // ---------- More Physics ----------
  {
    id: 16,
    question: "The speed of light in vacuum is?",
    options: ["3 × 10⁸ m/s", "1.6 × 10⁻¹⁹ m/s", "9.8 m/s²", "6.022 × 10²³ m/s"],
    answer: "3 × 10⁸ m/s",
  },
  {
    id: 17,
    question: "Which particle has no charge?",
    options: ["Proton", "Neutron", "Electron", "Alpha"],
    answer: "Neutron",
  },
  {
    id: 18,
    question: "Unit of resistance is?",
    options: ["Watt", "Ohm", "Volt", "Ampere"],
    answer: "Ohm",
  },
  {
    id: 19,
    question: "The process of joining nuclei is called?",
    options: ["Fission", "Fusion", "Combustion", "Ionization"],
    answer: "Fusion",
  },
  {
    id: 20,
    question: "Work done is maximum when angle between force and displacement is?",
    options: ["0°", "45°", "90°", "180°"],
    answer: "0°",
  },

  // ---------- More Chemistry ----------
  {
    id: 21,
    question: "The common name of CaCO₃ is?",
    options: ["Bleaching powder", "Quicklime", "Limestone", "Plaster of Paris"],
    answer: "Limestone",
  },
  {
    id: 22,
    question: "Who proposed the planetary model of atom?",
    options: ["Dalton", "Thomson", "Rutherford", "Bohr"],
    answer: "Rutherford",
  },
  {
    id: 23,
    question: "Which gas turns lime water milky?",
    options: ["O₂", "CO₂", "NH₃", "H₂"],
    answer: "CO₂",
  },
  {
    id: 24,
    question: "Which metal is liquid at room temperature?",
    options: ["Sodium", "Mercury", "Aluminium", "Iron"],
    answer: "Mercury",
  },
  {
    id: 25,
    question: "p-block elements belong to which groups?",
    options: ["1-2", "3-12", "13-18", "19-20"],
    answer: "13-18",
  },

  // ---------- More Math ----------
  {
    id: 26,
    question: "The slope of line parallel to x-axis is?",
    options: ["0", "1", "∞", "-1"],
    answer: "0",
  },
  {
    id: 27,
    question: "The probability of getting an even number on a dice is?",
    options: ["1/6", "1/2", "1/3", "2/3"],
    answer: "1/2",
  },
  {
    id: 28,
    question: "If log₁₀2 = 0.301, log₁₀5 = 0.699, then log₁₀100 = ?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    id: 29,
    question: "Area of circle of radius r is?",
    options: ["2πr", "πr²", "πr", "r²"],
    answer: "πr²",
  },
  {
    id: 30,
    question: "Limit of (sinx)/x as x→0 is?",
    options: ["0", "1", "∞", "Does not exist"],
    answer: "1",
  },

  // ---------- More Qs to make 50 ----------
  {
    id: 31,
    question: "Acceleration due to gravity on moon is about?",
    options: ["1/6 of earth", "Same as earth", "Twice earth", "Zero"],
    answer: "1/6 of earth",
  },
  {
    id: 32,
    question: "Which of these is NOT a noble gas?",
    options: ["Neon", "Helium", "Oxygen", "Argon"],
    answer: "Oxygen",
  },
  {
    id: 33,
    question: "cos²θ + sin²θ = ?",
    options: ["0", "1", "2", "θ"],
    answer: "1",
  },
  {
    id: 34,
    question: "The charge of electron is?",
    options: ["+1.6 × 10⁻¹⁹ C", "-1.6 × 10⁻¹⁹ C", "0", "+1 C"],
    answer: "-1.6 × 10⁻¹⁹ C",
  },
  {
    id: 35,
    question: "Which acid is present in lemon?",
    options: ["HCl", "Citric acid", "Acetic acid", "Sulfuric acid"],
    answer: "Citric acid",
  },
  {
    id: 36,
    question: "If A = {1,2,3}, then number of subsets is?",
    options: ["3", "6", "8", "9"],
    answer: "8",
  },
  {
    id: 37,
    question: "Velocity-time graph area represents?",
    options: ["Displacement", "Velocity", "Acceleration", "Force"],
    answer: "Displacement",
  },
  {
    id: 38,
    question: "Atomic number of Carbon is?",
    options: ["6", "8", "12", "14"],
    answer: "6",
  },
  {
    id: 39,
    question: "If a die is thrown, probability of odd number is?",
    options: ["1/6", "1/2", "1/3", "2/3"],
    answer: "1/2",
  },
  {
    id: 40,
    question: "In Bohr’s model, electrons revolve in?",
    options: ["Fixed orbits", "Elliptical orbits", "Nucleus", "Random paths"],
    answer: "Fixed orbits",
  },
  {
    id: 41,
    question: "Acceleration is rate of change of?",
    options: ["Speed", "Displacement", "Velocity", "Force"],
    answer: "Velocity",
  },
  {
    id: 42,
    question: "Which is the lightest element?",
    options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
    answer: "Hydrogen",
  },
  {
    id: 43,
    question: "tan(45°) = ?",
    options: ["0", "1", "√3", "∞"],
    answer: "1",
  },
  {
    id: 44,
    question: "Which device converts AC to DC?",
    options: ["Transformer", "Rectifier", "Generator", "Motor"],
    answer: "Rectifier",
  },
  {
    id: 45,
    question: "The chemical name of table salt is?",
    options: ["Na₂CO₃", "NaCl", "KCl", "NaOH"],
    answer: "NaCl",
  },
  {
    id: 46,
    question: "The roots of x² = 0 are?",
    options: ["0,0", "1,1", "±1", "No roots"],
    answer: "0,0",
  },
  {
    id: 47,
    question: "Acceleration due to gravity on earth is?",
    options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"],
    answer: "9.8 m/s²",
  },
  {
    id: 48,
    question: "Which gas is used in balloons?",
    options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    answer: "Helium",
  },
  {
    id: 49,
    question: "Value of π is approximately?",
    options: ["2.12", "3.14", "3.5", "22"],
    answer: "3.14",
  },
  {
    id: 50,
    question: "Which element is used in making pencils?",
    options: ["Lead", "Graphite", "Carbon dioxide", "Charcoal"],
    answer: "Graphite",
  },
];

const IITTest = () => {
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
      score: correct * 4 - wrong * 1, // IIT JEE marking scheme
    });

    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>IIT JEE Mock Test</h2>

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
              background: "#1976d2",
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
          <p><b>Final Score: {result.score} / {result.total * 4}</b></p>
        </div>
      )}
    </div>
  );
};

export default IITTest;
