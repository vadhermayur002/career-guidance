// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Button,
//   Box,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// function Colleges() {
//   // Sample colleges
//   const colleges = [
//   {
//     name: "IIT Delhi",
//     course: "B.Tech, M.Tech, MBA",
//     fees: "₹2,00,000 / year",
//     website: "https://home.iitd.ac.in",
//     image: "https://web.iitd.ac.in/~yaj/images/IIT-Delhi-logo.png",
//   },
//   {
//     name: "IIT Bombay",
//     course: "B.Tech, M.Tech, MBA",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitb.ac.in",
//     image: "https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png",
//   },
//   {
//     name: "IIT Madras",
//     course: "B.Tech, Dual Degree, PhD",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitm.ac.in",
//     image: "https://th.bing.com/th/id/R.ccde7d5d992a9498c6a7c3f9faf88dbb?rik=OW939N94pXsXPQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2fthumb%2f6%2f69%2fIIT_Madras_Logo.svg%2f1024px-IIT_Madras_Logo.svg.png&ehk=D%2bFY%2bZoYWViKvG5KuksZ2AL5V45tV93T2qbGEujXdVw%3d&risl=&pid=ImgRaw&r=0",
//   },
//   {
//     name: "IIT Kanpur",
//     course: "B.Tech, M.Tech, MBA",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitk.ac.in",
//     image: "https://gyaanarth.com/wp-content/uploads/2022/03/IIT_Kanpur_Logo.svg.png",
//   },
//   {
//     name: "IIT Kharagpur",
//     course: "Engineering, Architecture, Law",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitkgp.ac.in",
//     image: "https://tse4.mm.bing.net/th/id/OIP.J6zX3Y9QdX4dPV_BMfk7ZgHaIp?rs=1&pid=ImgDetMain&o=7&rm=3",
//   },
//   {
//     name: "IIT Roorkee",
//     course: "B.Tech, M.Tech",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitr.ac.in",
//     image: "https://www.iitr.ac.in/nsc2019/static/media/IITR_new_logo_color.b3fdd3ee.png",
//   },
//   {
//     name: "IIT Guwahati",
//     course: "B.Tech, Design, PhD",
//     fees: "₹2,00,000 / year",
//     website: "https://www.iitg.ac.in",
//     image: "https://www.kindpng.com/picc/m/406-4063945_iit-guwahati-logo-hd-png-download.png",
//   },
//   {
//     name: "IIT Hyderabad",
//     course: "B.Tech (AI, CSE, EE), M.Tech",
//     fees: "₹2,00,000 / year",
//     website: "https://iith.ac.in",
//     image: "https://www.nicepng.com/png/detail/270-2702875_iit-hyderabad-logo-indian-institute-of-technology-hyderabad.png",
//   },
//   {
//     name: "IISc Bangalore",
//     course: "B.Sc (Research), M.Tech, PhD",
//     fees: "₹1,50,000 / year",
//     website: "https://iisc.ac.in",
//     image: "https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black.jpg",
//   },
//   {
//     name: "JNU Delhi",
//     course: "Arts, Social Sciences, Languages",
//     fees: "₹3,000 / year",
//     website: "https://jnu.ac.in",
//     image: "https://jnu.ac.in/JNUnewLogo.jpeg",
//   },
//   {
//     name: "BHU Varanasi",
//     course: "Arts, Science, Medicine",
//     fees: "₹20,000 / year",
//     website: "https://bhu.ac.in",
//     image:"https://www.bhu.ac.in/Images/images/bhu-logo.png",
//   },
//   {
//     name: "AMU Aligarh",
//     course: "Engineering, Law, Arts, Medicine",
//     fees: "₹25,000 / year",
//     website: "https://amu.ac.in",
//     image: "https://i.pinimg.com/originals/ea/17/0e/ea170ea202e54192cc1a556a3b98cef4.png",
//   },
//   {
//     name: "Delhi University (DU)",
//     course: "Arts, Commerce, Science, Law",
//     fees: "₹15,000 / year",
//     website: "https://www.du.ac.in",
//     image: "https://live.staticflickr.com/2904/14523109503_e98c6c80fa.jpg",
//   },
//   {
//     name: "Christ University, Bangalore",
//     course: "BBA, MBA, B.Com, Law",
//     fees: "₹2,00,000 / year",
//     website: "https://christuniversity.in",
//     image: "https://clicktranscripts.com/new/wp-content/uploads/2022/05/christ-uni.png",
//   },
//   {
//     name: "Symbiosis University, Pune",
//     course: "MBA, Law, Mass Communication",
//     fees: "₹3,50,000 / year",
//     website: "https://siu.edu.in",
//     image: "https://applyonline.scol.ac.in/images/logo2.png",
//   },
//   {
//     name: "VIT Vellore",
//     course: "B.Tech, MBA, Law",
//     fees: "₹2,00,000 / year",
//     website: "https://vit.ac.in",
//     image: "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/vitlogo-freelogovectors.net_.png",
//   },
//   {
//     name: "Manipal University (MAHE)",
//     course: "Engineering, Medicine, Design",
//     fees: "₹3,00,000 / year",
//     website: "https://manipal.edu",
//     image: "https://www.getadmissioninfo.com/uploads/topics/Manipal%20University%20(MAHE)%20logo.png",
//   },
//   {
//     name: "SRM Institute of Science & Technology",
//     course: "Engineering, Medicine, MBA",
//     fees: "₹2,50,000 / year",
//     website: "https://www.srmist.edu.in",
//     image: "https://tse2.mm.bing.net/th/id/OIP.FP-z3Ta4KmKo_PYN7P8uWAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
//   },

//   {
  
//     name: "BITS Pilani",
//     course: "B.E, M.E, MBA",
//     fees: "₹5,00,000 / year",
//     website: "https://www.bits-pilani.ac.in",
//     image: "https://data.org/wp-content/uploads/2023/05/BITS_Pilani-Logo.png",
//   },
//   {
//     name: "Anna University, Chennai",
//     course: "B.E, MBA, Architecture",
//     fees: "₹1,00,000 / year",
//     website: "https://www.annauniv.edu",
//     image: "https://tse2.mm.bing.net/th/id/OIP.fhu8qmcQXWPJjdqm68WK0QHaHs?rs=1&pid=ImgDetMain&o=7&rm=3",
//   },
// ];
//   const [selectedCourse, setSelectedCourse] = useState("All");

//   // ✅ Filter by Course
//   const filteredColleges =
//     selectedCourse === "All"
//       ? colleges
//       : colleges.filter((c) => c.course.includes(selectedCourse));

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(to right, #e3f2fd, #e1bee7)", // soft gradient bg
//         py: 5,
//       }}
//     >
//       <Container>
//         {/* Title */}
//         <Typography
//           variant="h3"
//           align="center"
//           fontWeight="bold"
//           gutterBottom
//           sx={{ color: "#1a237e" }}
//         >
//           🏫 Top Colleges
//         </Typography>

//         {/* Filter Dropdown */}
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//           <FormControl sx={{ minWidth: 250, background: "white", borderRadius: 2 }}>
//             <InputLabel>Filter by Course</InputLabel>
//             <Select
//               value={selectedCourse}
//               onChange={(e) => setSelectedCourse(e.target.value)}
//             >
//               <MenuItem value="All">All</MenuItem>
//               <MenuItem value="B.Tech">B.Tech</MenuItem>
//               <MenuItem value="M.Tech">M.Tech</MenuItem>
//               <MenuItem value="MBA">MBA</MenuItem>
//               <MenuItem value="PhD">PhD</MenuItem>
//               <MenuItem value="B.E">B.E</MenuItem>
//               <MenuItem value="M.E">M.E</MenuItem>
//               <MenuItem value="Arts">Arts</MenuItem>
//               <MenuItem value="Science">Science</MenuItem>
//               <MenuItem value="Commerce">Commerce</MenuItem>
//               <MenuItem value="Law">Law</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         {/* Colleges Grid */}
//         <Grid container spacing={4}>
//           {filteredColleges.map((college, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   boxShadow: 4,
//                   transition: "0.3s",
//                   "&:hover": { boxShadow: 10, transform: "scale(1.05)" },
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 {/* College Logo */}
//                 <CardMedia
//                   component="img"
//                   image={college.image}
//                   alt={college.name}
//                   sx={{ width: 120, height: 120, objectFit: "contain", mx: "auto", mt: 2 }}
//                 />

//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {college.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <b>Courses:</b> {college.course}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     <b>Fees:</b> {college.fees}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     href={college.website}
//                     target="_blank"
//                     sx={{
//                       mt: 2,
//                       borderRadius: 3,
//                       background: "#1a237e",
//                       "&:hover": { background: "#303f9f" },
//                     }}
//                   >
//                     Visit Website
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Colleges;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import {
// //   Container,
// //   Grid,
// //   Card,
// //   CardContent,
// //   Typography,
// //   CardMedia,
// //   Button,
// //   Box,
// //   MenuItem,
// //   Select,
// //   InputLabel,
// //   FormControl,
// // } from "@mui/material";

// // function Colleges() {
// //   const [colleges, setColleges] = useState([]);
// //   const [selectedCourse, setSelectedCourse] = useState("All");

// //   // ✅ Fetch from backend
// //   useEffect(() => {
// //     const fetchColleges = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/api/colleges");
// //         setColleges(res.data);
// //       } catch (err) {
// //         console.error("Error fetching colleges:", err);
// //       }
// //     };

// //     fetchColleges();
// //   }, []);

// //   // ✅ Unique courses for filter
// //   const uniqueCourses = [
// //     "All",
// //     ...new Set(colleges.flatMap((c) => c.courses || [])),
// //   ];

// //   // ✅ Apply filter
// //   const filteredColleges =
// //     selectedCourse === "All"
// //       ? colleges
// //       : colleges.filter((c) => c.courses.includes(selectedCourse));

// //   return (
// //     <Box>
// //       <Box
// //         sx={{
// //           height: "50vh",
// //           backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url("https://cdn.pixabay.com/photo/2016/11/18/12/52/achievement-1836974_1280.jpg")`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           textAlign: "center",
// //           color: "white",
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             backgroundColor: "rgba(0,0,0,0.6)",
// //             p: { xs: 2, md: 4 },
// //             borderRadius: 3,
// //             maxWidth: "700px",
// //           }}
// //         >
// //           <Typography variant="h3" fontWeight="bold" color="orange">
// //             Explore Top Colleges
// //           </Typography>
// //           <Typography variant="h6" mt={2} color="gray.300">
// //             Choose the best institute to shape your career
// //           </Typography>
// //         </Box>
// //       </Box>

// //       {/* Colleges Section */}
// //       <Box sx={{ py: 6, backgroundColor: "#121212", minHeight: "100vh" }}>
// //         <Container>
// //           {/* Filter */}
// //           <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
// //             <FormControl
// //               sx={{
// //                 minWidth: 250,
// //                 backgroundColor: "#1e1e1e",
// //                 borderRadius: 2,
// //                 boxShadow: 2,
// //                 color: "white",
// //               }}
// //             >
// //               <InputLabel sx={{ color: "white" }}>Filter by Course</InputLabel>
// //               <Select
// //                 value={selectedCourse}
// //                 onChange={(e) => setSelectedCourse(e.target.value)}
// //                 sx={{
// //                   color: "white",
// //                   ".MuiOutlinedInput-notchedOutline": {
// //                     borderColor: "gray",
// //                   },
// //                   "&:hover .MuiOutlinedInput-notchedOutline": {
// //                     borderColor: "orange",
// //                   },
// //                   ".MuiSvgIcon-root": { color: "white" },
// //                 }}
// //               >
// //                 {uniqueCourses.map((course, index) => (
// //                   <MenuItem key={index} value={course}>
// //                     {course}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //           </Box>

// //           {/* Colleges Grid */}
// //           <Grid container spacing={4}>
// //             {filteredColleges.map((college) => (
// //               <Grid item xs={12} sm={6} md={4} key={college._id}>
// //                 <Card
// //                   sx={{
// //                     borderRadius: 3,
// //                     boxShadow: 6,
// //                     backgroundColor: "#1e1e1e",
// //                     transition: "0.3s",
// //                     "&:hover": { boxShadow: 12, transform: "scale(1.03)" },
// //                     textAlign: "center",
// //                     height: "100%",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     color: "white",
// //                   }}
// //                 >
// //                   <Box
// //                     sx={{
// //                       height: 150,
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       p: 2,
// //                     }}
// //                   >
// //                     {college.image && (
// //                       <CardMedia
// //                         component="img"
// //                         image={college.image}
// //                         alt={college.name}
// //                         sx={{
// //                           maxHeight: "100%",
// //                           maxWidth: "80%",
// //                           objectFit: "contain",
// //                         }}
// //                       />
// //                     )}
// //                   </Box>

// //                   <CardContent>
// //                     <Typography variant="h6" fontWeight="bold" gutterBottom>
// //                       {college.name}
// //                     </Typography>
// //                     <Typography variant="body2" color="gray.400">
// //                       <b>Courses:</b> {college.courses?.join(", ")}
// //                     </Typography>
// //                     <Typography
// //                       variant="body2"
// //                       color="gray.400"
// //                       gutterBottom
// //                     >
// //                       <b>Fees:</b> {college.fees}
// //                     </Typography>

// //                     <Button
// //                       variant="contained"
// //                       href={college.website}
// //                       target="_blank"
// //                       sx={{
// //                         mt: 2,
// //                         borderRadius: 3,
// //                         background: "linear-gradient(45deg, #ff9800, #ff5722)",
// //                         fontWeight: "bold",
// //                         "&:hover": {
// //                           background:
// //                             "linear-gradient(45deg,#ff5722,#ff9800)",
// //                           boxShadow: "0px 0px 12px rgba(255,152,0,0.7)",
// //                         },
// //                       }}
// //                     >
// //                       Visit Website
// //                     </Button>
// //                   </CardContent>
// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default Colleges;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("All");

  // Fetch from backend
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/colleges");
        setColleges(res.data);
      } catch (err) {
        console.error("Error fetching colleges:", err);
      }
    };

    fetchColleges();
  }, []);

  // Hardcoded fallback courses (from your first code)
  const fallbackCourses = [
    "B.Tech",
    "M.Tech",
    "MBA",
    "PhD",
    "B.E",
    "M.E",
    "Arts",
    "Science",
    "Commerce",
    "Law",
  ];

  // Unique courses: backend courses + fallback courses
  const uniqueCourses = [
    "All",
    ...new Set([
      ...colleges.flatMap((c) => c.courses || []),
      ...fallbackCourses,
    ]),
  ];

  // Filter colleges based on selected course
  const filteredColleges =
    selectedCourse === "All"
      ? colleges
      : colleges.filter((c) => c.courses?.includes(selectedCourse));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url("https://cdn.pixabay.com/photo/2016/11/18/12/52/achievement-1836974_1280.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.6)",
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            maxWidth: "700px",
          }}
        >
          <Typography variant="h3" fontWeight="bold" color="orange">
            Explore Top Colleges
          </Typography>
          <Typography variant="h6" mt={2} color="gray.300">
            Choose the best institute to shape your career
          </Typography>
        </Box>
      </Box>

      {/* Colleges Section */}
      <Box sx={{ py: 6, backgroundColor: "#121212", minHeight: "100vh" }}>
        <Container>
          {/* Filter Dropdown */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <FormControl
              sx={{
                minWidth: 250,
                backgroundColor: "#1e1e1e",
                borderRadius: 2,
                boxShadow: 2,
                color: "white",
              }}
            >
              <InputLabel sx={{ color: "white" }}>Filter by Course</InputLabel>
              <Select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                sx={{
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "orange" },
                  ".MuiSvgIcon-root": { color: "white" },
                }}
              >
                {uniqueCourses.map((course, index) => (
                  <MenuItem key={index} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Colleges Grid */}
          <Grid container spacing={4}>
            {filteredColleges.map((college) => (
              <Grid item xs={12} sm={6} md={4} key={college._id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 6,
                    backgroundColor: "#1e1e1e",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 12, transform: "scale(1.03)" },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <Box
                    sx={{
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    {college.image && (
                      <CardMedia
                        component="img"
                        image={college.image}
                        alt={college.name}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "80%",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {college.name}
                    </Typography>
                    <Typography variant="body2" color="gray.400">
                      <b>Courses:</b> {college.courses?.join(", ")}
                    </Typography>
                    <Typography variant="body2" color="gray.400" gutterBottom>
                      <b>Fees:</b> {college.fees}
                    </Typography>

                    <Button
                      variant="contained"
                      href={college.website}
                      target="_blank"
                      sx={{
                        mt: 2,
                        borderRadius: 3,
                        background: "linear-gradient(45deg, #ff9800, #ff5722)",
                        fontWeight: "bold",
                        "&:hover": {
                          background: "linear-gradient(45deg,#ff5722,#ff9800)",
                          boxShadow: "0px 0px 12px rgba(255,152,0,0.7)",
                        },
                      }}
                    >
                      Visit Website
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Colleges;
