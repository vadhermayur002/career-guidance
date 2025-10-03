// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   Link,
// } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import LayersIcon from "@mui/icons-material/Layers";

// const examsData = [
//   {
//     id: 1,
//     name: "UPSC Civil Services Exam (IAS/IPS/IFS)",
//     conductedBy: "UPSC",
//     eligibility: "Graduate (Any Stream)",
//     ageLimit: "21–32 years (with relaxation)",
//     salary: "₹56,100 – ₹2,50,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/UnacademyUPSC",
//   },
//   {
//     id: 2,
//     name: "SSC CGL (Combined Graduate Level Exam)",
//     conductedBy: "SSC",
//     eligibility: "Graduate",
//     ageLimit: "18–32 years",
//     salary: "₹25,500 – ₹1,51,100 per month",
//     stages: "Tier-I → Tier-II → Skill Test → DV",
//     freeCourse: "https://www.youtube.com/c/Adda247",
//   },
//   {
//     id: 3,
//     name: "IBPS PO (Probationary Officer)",
//     conductedBy: "IBPS",
//     eligibility: "Graduate",
//     ageLimit: "20–30 years",
//     salary: "₹52,000 – ₹55,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/Oliveboard",
//   },
//   {
//     id: 4,
//     name: "Railway Recruitment Board (RRB NTPC/Group D)",
//     conductedBy: "RRB",
//     eligibility: "10th/12th/Graduate (Depends on Post)",
//     ageLimit: "18–33 years",
//     salary: "₹21,000 – ₹81,000 per month",
//     stages: "CBT 1 → CBT 2 → Skill Test/Interview → DV",
//     freeCourse: "https://www.youtube.com/c/TestbookRailways",
//   },
//   {
//     id: 5,
//     name: "State Public Service Commissions (PSC)",
//     conductedBy: "State PSCs",
//     eligibility: "Graduate",
//     ageLimit: "21–35 years",
//     salary: "₹35,000 – ₹1,50,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/StudyIQeducation",
//   },
//   {
//     id: 6,
//     name: "SSC CHSL (Combined Higher Secondary Level Exam)",
//     conductedBy: "SSC",
//     eligibility: "12th Pass",
//     ageLimit: "18–27 years",
//     salary: "₹19,900 – ₹81,100 per month",
//     stages: "Tier-I → Tier-II → Skill Test",
//     freeCourse: "https://www.youtube.com/c/WiFiStudy",
//   },
//   {
//     id: 7,
//     name: "Indian Engineering Services (IES/ESE)",
//     conductedBy: "UPSC",
//     eligibility: "Engineering Graduate",
//     ageLimit: "21–30 years",
//     salary: "₹56,100 – ₹1,77,500 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/MadeEasy",
//   },
//   {
//     id: 8,
//     name: "NDA (National Defence Academy Exam)",
//     conductedBy: "UPSC",
//     eligibility: "12th Pass (PCM for Airforce/Navy)",
//     ageLimit: "16.5 – 19.5 years",
//     salary: "Stipend ₹56,100 + Perks",
//     stages: "Written → SSB Interview → Medical",
//     freeCourse: "https://www.youtube.com/c/MajorKalshiClasses",
//   },
//   {
//     id: 9,
//     name: "CDS (Combined Defence Services Exam)",
//     conductedBy: "UPSC",
//     eligibility: "Graduate",
//     ageLimit: "19 – 25 years",
//     salary: "₹56,100 – ₹2,25,000 per month",
//     stages: "Written → SSB Interview → Medical",
//     freeCourse: "https://www.youtube.com/c/DefenceWallah",
//   },
//   {
//     id: 10,
//     name: "LIC AAO (Assistant Administrative Officer)",
//     conductedBy: "LIC",
//     eligibility: "Graduate",
//     ageLimit: "21 – 30 years",
//     salary: "₹53,600 – ₹1,02,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/Bankersadda",
//   },
//   {
//     id: 11,
//     name: "SSC JE (Junior Engineer)",
//     conductedBy: "SSC",
//     eligibility: "Diploma/Engineering",
//     ageLimit: "18 – 32 years",
//     salary: "₹35,400 – ₹1,12,400 per month",
//     stages: "Paper I → Paper II → DV",
//     freeCourse: "https://www.youtube.com/c/Gradeup",
//   },
//   {
//     id: 12,
//     name: "DRDO Scientist/Engineer",
//     conductedBy: "DRDO",
//     eligibility: "Engineering Graduate",
//     ageLimit: "28 years",
//     salary: "₹56,100 – ₹1,77,500 per month",
//     stages: "Written → Interview",
//     freeCourse: "https://www.youtube.com/c/Examपुर",
//   },
//   {
//     id: 13,
//     name: "ISRO Scientist/Engineer",
//     conductedBy: "ISRO",
//     eligibility: "Engineering Graduate",
//     ageLimit: "28 years",
//     salary: "₹56,100 – ₹1,77,500 per month",
//     stages: "Written → Interview",
//     freeCourse: "https://www.youtube.com/c/IStudyIQ",
//   },
//   {
//     id: 14,
//     name: "SSC MTS (Multi-Tasking Staff)",
//     conductedBy: "SSC",
//     eligibility: "10th Pass",
//     ageLimit: "18–27 years",
//     salary: "₹18,000 – ₹56,900 per month",
//     stages: "Tier-I → Tier-II → DV",
//     freeCourse: "https://www.youtube.com/c/WiFiStudy",
//   },
//   {
//     id: 15,
//     name: "RBI Grade B Officer",
//     conductedBy: "RBI",
//     eligibility: "Graduate",
//     ageLimit: "21–30 years",
//     salary: "₹77,208 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/IQRASEducation",
//   },
//   {
//     id: 16,
//     name: "NABARD Grade A Officer",
//     conductedBy: "NABARD",
//     eligibility: "Graduate/PG",
//     ageLimit: "21–30 years",
//     salary: "₹62,600 – ₹1,00,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/AffairsCloud",
//   },
//   {
//     id: 17,
//     name: "FCI Manager/Assistant",
//     conductedBy: "FCI",
//     eligibility: "Graduate",
//     ageLimit: "18–28 years",
//     salary: "₹40,000 – ₹1,40,000 per month",
//     stages: "Prelims → Mains → Interview",
//     freeCourse: "https://www.youtube.com/c/Oliveboard",
//   },
//   {
//     id: 18,
//     name: "GATE (PSU Recruitment)",
//     conductedBy: "IITs/NITs + PSUs",
//     eligibility: "Engineering Graduate",
//     ageLimit: "Varies (Mostly ≤30 years)",
//     salary: "₹60,000 – ₹1,80,000 per month (in PSUs)",
//     stages: "GATE Exam → Interview",
//     freeCourse: "https://www.youtube.com/c/NPTELHRD",
//   },
//   {
//     id: 19,
//     name: "Indian Coast Guard (Assistant Commandant)",
//     conductedBy: "ICG",
//     eligibility: "Graduate",
//     ageLimit: "21–25 years",
//     salary: "₹56,100 – ₹2,00,000 per month",
//     stages: "Written → Interview → Medical",
//     freeCourse: "https://www.youtube.com/c/MajorKalshiClasses",
//   },
//   {
//     id: 20,
//     name: "SSC Stenographer",
//     conductedBy: "SSC",
//     eligibility: "12th Pass",
//     ageLimit: "18–27 years",
//     salary: "₹25,500 – ₹81,100 per month",
//     stages: "Tier-I → Skill Test → DV",
//     freeCourse: "https://www.youtube.com/c/Adda247",
//   },
// ];

// export default function ExamSection() {
//   const [search, setSearch] = useState("");

//   const filteredExams = examsData.filter((exam) =>
//     exam.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Top 20+ Government Exams in India
//       </Typography>

//       <TextField
//         label="Search Exam"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Grid container spacing={3}>
//         {filteredExams.map((exam) => (
//           <Grid item xs={12} sm={6} md={4} key={exam.id}>
//             <Card
//               sx={{
//                 height: "100%",
//                 transition: "0.3s",
//                 "&:hover": { transform: "scale(1.05)" },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   {exam.name}
//                 </Typography>
//                 <Typography variant="body2">
//                   <SchoolIcon fontSize="small" />{" "}
//                   <strong>Conducted By:</strong> {exam.conductedBy}
//                 </Typography>
//                 <Typography variant="body2">
//                   <AssignmentIndIcon fontSize="small" />{" "}
//                   <strong>Eligibility:</strong> {exam.eligibility}
//                 </Typography>
//                 <Typography variant="body2">
//                   <AccessTimeIcon fontSize="small" />{" "}
//                   <strong>Age Limit:</strong> {exam.ageLimit}
//                 </Typography>
//                 <Typography variant="body2">
//                   <MonetizationOnIcon fontSize="small" />{" "}
//                   <strong>Salary:</strong> {exam.salary}
//                 </Typography>
//                 <Typography variant="body2">
//                   <LayersIcon fontSize="small" />{" "}
//                   <strong>Exam Stages:</strong> {exam.stages}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   <Link href={exam.freeCourse} target="_blank" rel="noopener">
//                     📘 Free Course
//                   </Link>
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Link,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LayersIcon from "@mui/icons-material/Layers";

export default function ExamSection() {
  const [exams, setExams] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch exams from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/exams")
      .then((res) => setExams(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredExams = exams.filter((exam) =>
    exam.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Top Government Exams in India
      </Typography>

      <TextField
        label="Search Exam"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredExams.map((exam) => (
          <Grid item xs={12} sm={6} md={4} key={exam._id}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {exam.name}
                </Typography>
                <Typography variant="body2">
                  <SchoolIcon fontSize="small" /> <strong>Conducted By:</strong> {exam.conductedBy}
                </Typography>
                <Typography variant="body2">
                  <AssignmentIndIcon fontSize="small" /> <strong>Eligibility:</strong> {exam.eligibility}
                </Typography>
                <Typography variant="body2">
                  <AccessTimeIcon fontSize="small" /> <strong>Age Limit:</strong> {exam.ageLimit}
                </Typography>
                <Typography variant="body2">
                  <MonetizationOnIcon fontSize="small" /> <strong>Salary:</strong> {exam.salary}
                </Typography>
                <Typography variant="body2">
                  <LayersIcon fontSize="small" /> <strong>Exam Stages:</strong> {exam.stages}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <Link href={exam.freeCourse} target="_blank" rel="noopener">
                    📘 Free Course
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
