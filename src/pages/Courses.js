// import React, { useState } from "react"; // ✅ import useState
// //import { useNavigate } from "react-router-dom";

// function Courses() {
//   // Sample courses
//   const courses = [
//     {
//       name: "Java",
//       course: "Java",
//       website:
//         "https://alison.com/course/java-part-1-what-s-new?utm_source=bing&utm_medium=cpc&utm_campaign=531498933&utm_content=1364496467608191&utm_term=kwd-85282193801450:loc-90&msclkid=eae225830e15110b7b994d33114a0760",
//       image: "https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg",
//     },
    
//   {
//     name: "Python for Everybody",
//     course: "Python",
//     website: "https://www.coursera.org/specializations/python",
//     image: "https://gss-technology.com/wp-content/uploads/2021/07/04.png",
//   },
//   {
//     name: "CS50: Introduction to Computer Science",
//     course: "Computer Science",
//     website: "https://cs50.harvard.edu/x/",
//     image: "https://repository-images.githubusercontent.com/408218596/c5562f34-43be-4186-b9b3-970924a00529",
//   },
//   {
//     name: "Web Development",
//     course: "HTML, CSS, JavaScript",
//     website: "https://www.freecodecamp.org/learn/",
//     image: "https://thumbs.dreamstime.com/b/web-development-icon-logo-line-art-style-vector-illustration-83644923.jpg",
//   },
//   {
//     name: "JavaScript Basics",
//     course: "JavaScript",
//     website: "https://www.codecademy.com/learn/introduction-to-javascript",
//     image: "https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png",
//   },
//   {
//     name: "Data Science Foundations",
//     course: "Data Science",
//     website: "https://www.edx.org/course/data-science-machine-learning",
//     image: "https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-data-science.png",
//   },
//   {
//     name: "AI for Everyone",
//     course: "Artificial Intelligence",
//     website: "https://www.coursera.org/learn/ai-for-everyone",
//     image: "https://th.bing.com/th/id/R.ef59cbef835c1e35dfa1a0dd9477e620?rik=P9CiG02KMMgnsw&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f612560dfd39ab83a3df8150b%2ft%2f613d3dc0927160661892ec7a%2f1631403456724%2fAIForEveryone-Latest-Logo%2bcopy.png%3fformat%3d1500w&ehk=3RPOyVWnkqa%2foFR3xrgxM2WnBX4P6x%2fkulp7m8QbRUs%3d&risl=&pid=ImgRaw&r=0",
//   },
//   {
//     name: "Machine Learning",
//     course: "Machine Learning",
//     website: "https://www.coursera.org/learn/machine-learning",
//     image: "https://static.vecteezy.com/system/resources/previews/013/899/429/original/machine-learning-icon-artificial-intelligence-smart-machine-logo-template-illustration-free-vector.jpg",
//   },
//   {
//     name: "C++ for Beginners",
//     course: "C++",
//     website: "https://www.learncpp.com/",
//     image: "https://isocpp.org/assets/images/cpp_logo.png",
//   },
//   {
//     name: "Database Design",
//     course: "SQL & Databases",
//     website: "https://www.khanacademy.org/computing/computer-programming/sql",
//     image: "https://cdn.kastatic.org/images/khan-logo-vertical-transparent.png",
//   },
// ];


//   const [selectedCourse, setSelectedCourse] = useState("All"); // ✅ correct state name

//   // Filter by course
//   const filteredCourse =
//     selectedCourse === "All"
//       ? courses
//       : courses.filter((c) =>
//           c.course.toLowerCase().includes(selectedCourse.toLowerCase())
//         );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ textAlign: "center" }}>📘 Top Courses</h1>

      
//       <div style={{ marginBottom: "20px", textAlign: "center" }}>
//         <label style={{ marginRight: "10px", fontWeight: "bold" }}>
//           Filter by Course:
//         </label>
//         <select
//           value={selectedCourse}
//           onChange={(e) => setSelectedCourse(e.target.value)} 
//           style={{ padding: "8px", borderRadius: "5px" }}
//         >
//           <option value="All">All</option>
//           <option value="Java">Java</option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="SQL & Databases">SQL & Databases</option>
//           <option value="Machine Learning">Machine Learning</option>
//           <option value="Artificial Intelligence">Artificial Intelligence</option>
//           <option value="CSS">CSS</option>
//            <option value="HTML">HTML</option>
//           <option value="Python">Python</option>
//           <option value="Data Science">Data Science</option>
//         </select>
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredCourse.map((course, index) => (
//           <div
//             key={index}
//             style={{
//               border: "2px solid #0200009a",
//               borderRadius: "20px",
//               padding: "10px",
//               textAlign: "center",
//               boxShadow: "0px 4px 8px rgba(3, 0, 0, 0.93)",
//             }}
//           >
//             <img
//               src={course.image}
//               alt={course.name}
//               style={{ width: "80px", height: "80px", marginBottom: "10px" }}
//             />
//             <h2>{course.name}</h2>
//             <p>
//               <strong>Course:</strong> {course.course}
//             </p>

//             <a
//               href={course.website}
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginTop: "10px",
//                 padding: "8px 12px",
//                 background: "#007bff",
//                 color: "#fff",
//                 borderRadius: "5px",
//                 textDecoration: "none",
//               }}
//             >
//               Visit Website
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Java",
    category: "Java",
    website: "https://alison.com/course/java-programming",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    id: 2,
    title: "Python for Everybody",
    category: "Python",
    website: "https://www.coursera.org/specializations/python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 3,
    title: "CS50: Introduction to Computer Science",
    category: "Computer Science",
    website: "https://cs50.harvard.edu/x/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/CS50_logo.png",
  },
  {
    id: 4,
    title: "Web Development",
    category: "HTML, CSS, JavaScript",
    website: "https://www.theodinproject.com/",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
  },
  {
    id: 5,
    title: "JavaScript Basics",
    category: "JavaScript",
    website: "https://javascript.info/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 6,
    title: "Data Science Foundations",
    category: "Data Science",
    website: "https://www.datacamp.com/",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
  },
  {
    id: 7,
    title: "AI for Everyone",
    category: "Artificial Intelligence",
    website: "https://www.coursera.org/learn/ai-for-everyone",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712103.png",
  },
  {
    id: 8,
    title: "Machine Learning",
    category: "Machine Learning",
    website: "https://www.coursera.org/learn/machine-learning",
    logo: "https://cdn-icons-png.flaticon.com/512/4149/4149647.png",
  },
];

function Courses() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4} justifyContent="center">
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                backgroundColor: "#1c1c1c",
                color: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
              }}
            >
              {/* Logo */}
              <Box
                component="img"
                src={course.logo}
                alt={course.title}
                sx={{ height: 80, width: "auto", objectFit: "contain", mb: 2 }}
              />

              {/* Title */}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    background: "orange",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                  }}
                >
                  {course.category}
                </Box>
              </CardContent>

              {/* Button */}
              <Button
                href={course.website}
                target="_blank"
                variant="contained"
                sx={{
                  mt: "auto",
                  background: "linear-gradient(to right, #ff8008, #ff4500)",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  "&:hover": { background: "linear-gradient(to right, #ff4500, #ff8008)" },
                }}
              >
                VISIT WEBSITE
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Courses;
