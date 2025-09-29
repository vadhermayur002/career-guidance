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

import React, { useState } from "react";

function Courses() {
  // Sample courses
  const courses = [
    {
      name: "Java",
      course: "Java",
      website: "https://alison.com/course/java-part-1-what-s-new",
      image: "https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg",
    },
    {
      name: "Python for Everybody",
      course: "Python",
      website: "https://www.coursera.org/specializations/python",
      image: "https://gss-technology.com/wp-content/uploads/2021/07/04.png",
    },
    {
      name: "CS50: Introduction to Computer Science",
      course: "Computer Science",
      website: "https://cs50.harvard.edu/x/",
      image: "https://repository-images.githubusercontent.com/408218596/c5562f34-43be-4186-b9b3-970924a00529",
    },
    {
      name: "Web Development",
      course: "HTML, CSS, JavaScript",
      website: "https://www.freecodecamp.org/learn/",
      image: "https://thumbs.dreamstime.com/b/web-development-icon-logo-line-art-style-vector-illustration-83644923.jpg",
    },
    {
      name: "JavaScript Basics",
      course: "JavaScript",
      website: "https://www.codecademy.com/learn/introduction-to-javascript",
      image: "https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png",
    },
    {
      name: "Data Science Foundations",
      course: "Data Science",
      website: "https://www.edx.org/course/data-science-machine-learning",
      image: "https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-data-science.png",
    },
    {
      name: "AI for Everyone",
      course: "Artificial Intelligence",
      website: "https://www.coursera.org/learn/ai-for-everyone",
      image: "https://static1.squarespace.com/static/612560dfd39ab83a3df8150b/t/613d3dc0927160661892ec7a/1631403456724/AIForEveryone-Latest-Logo+copy.png",
    },
    {
      name: "Machine Learning",
      course: "Machine Learning",
      website: "https://www.coursera.org/learn/machine-learning",
      image: "https://static.vecteezy.com/system/resources/previews/013/899/429/original/machine-learning-icon-artificial-intelligence-smart-machine-logo-template-illustration-free-vector.jpg",
    },
    {
      name: "C++ for Beginners",
      course: "C++",
      website: "https://www.learncpp.com/",
      image: "https://isocpp.org/assets/images/cpp_logo.png",
    },
    {
      name: "Database Design",
      course: "SQL & Databases",
      website: "https://www.khanacademy.org/computing/computer-programming/sql",
      image: "https://cdn.kastatic.org/images/khan-logo-vertical-transparent.png",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState("All");

  // Filter by category
  const filteredCourse =
    selectedCourse === "All"
      ? courses
      : courses.filter((c) =>
          c.course.toLowerCase().includes(selectedCourse.toLowerCase())
        );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // ✅ Dark background
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
        {filteredCourse.map((course, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e", // ✅ Dark card
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0px 6px 15px rgba(0,0,0,0.6)",
              height: "320px", // ✅ Fixed card height
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
              alt={course.name}
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 10px",
                objectFit: "contain",
              }}
            />
            <h2 style={{ color: "#ff9800", fontSize: "18px" }}>{course.name}</h2>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              <strong>Course:</strong> {course.course}
            </p>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;



