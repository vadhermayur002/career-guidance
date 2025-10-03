import React, { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses") // fetch from your server
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredCourses =
    selectedCourse === "All"
      ? courses
      : courses.filter((c) =>
          c.course?.toLowerCase().includes(selectedCourse.toLowerCase())
        );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "30px",
        color: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>📘 Top Courses</h1>

      {/* Dropdown */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Filter by Course:
        </label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        >
          <option value="All">All</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="SQL & Databases">SQL & Databases</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Python">Python</option>
          <option value="Data Science">Data Science</option>
          <option value="Computer Science">Computer Science</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0px 6px 15px rgba(0,0,0,0.6)",
              height: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px) scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
          >
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 10px",
                objectFit: "contain",
              }}
            />
            <h2 style={{ color: "#ff9800", fontSize: "18px" }}>{course.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              <strong>Course:</strong> {course.course}
            </p>
            {course.website && (
              <a
                href={course.website}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "linear-gradient(45deg, #ff9800, #ff5722)",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
