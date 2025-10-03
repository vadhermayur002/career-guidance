const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/career_guidance")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ==========================
   🔹 User Schema & Model
========================== */
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
});
const User = mongoose.model("User", userSchema);

/* ==========================
   🔹 College Schema & Model
========================== */
const collegeSchema = new mongoose.Schema({
  name: String,
  courses: [String],
  fees: String,
  website: String,
  image: String, // ✅ College image
});
const College = mongoose.model("College", collegeSchema);

/* ==========================
   🔹 Exam Schema & Model
========================== */
const examSchema = new mongoose.Schema({
  name: String,
  conductedBy: String,
  eligibility: String,
});
const Exam = mongoose.model("Exam", examSchema);

/* ==========================
   ✅ Routes
========================== */

// Root
app.get("/", (req, res) => {
  res.send("🚀 Career Guidance API is running!");
});

/* -------- USER AUTH -------- */

// ✅ Signup
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    // First user becomes admin, others normal users
    const userCount = await User.countDocuments();
    const role = userCount === 0 ? "admin" : "user";

    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ msg: `User created successfully as ${role}` });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({ msg: "Login successful", role: user.role, name: user.name });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

/* -------- COLLEGES -------- */

// ✅ Get all colleges
app.get("/api/colleges", async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Add new college
app.post("/api/colleges", async (req, res) => {
  try {
    const newCollege = new College(req.body);
    await newCollege.save();
    res.status(201).json({ msg: "College added successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Update college
app.put("/api/colleges/:id", async (req, res) => {
  try {
    await College.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "College updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete college
app.delete("/api/colleges/:id", async (req, res) => {
  try {
    await College.findByIdAndDelete(req.params.id);
    res.json({ msg: "College deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

/* -------- EXAMS -------- */

// ✅ Get all exams
app.get("/api/exams", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Add new exam
app.post("/api/exams", async (req, res) => {
  try {
    const newExam = new Exam(req.body);
    await newExam.save();
    res.status(201).json({ msg: "Exam added successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Update exam
app.put("/api/exams/:id", async (req, res) => {
  try {
    await Exam.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "Exam updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete exam
app.delete("/api/exams/:id", async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ msg: "Exam deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

/* -------- ADMIN: USERS -------- */

// ✅ Get all users (no password)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Update user (name, email, role)
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// -------------------
// Career Path Schema
// -------------------
const careerPathSchema = new mongoose.Schema({
  title: { type: String, required: true },
  roles: { type: [String], default: [] },
  skills: { type: [String], default: [] },
  futureScope: { type: String, default: "" },
});

const CareerPath = mongoose.model("CareerPath", careerPathSchema);

// -------------------
// Routes
// -------------------

// Get all career paths
app.get("/api/career_paths", async (req, res) => {
  try {
    const paths = await CareerPath.find();
    res.json(paths);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a career path
app.post("/api/career_paths", async (req, res) => {
  try {
    const newPath = new CareerPath(req.body);
    await newPath.save();
    res.status(201).json(newPath);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a career path
app.put("/api/career_paths/:id", async (req, res) => {
  try {
    const updatedPath = await CareerPath.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPath);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a career path
app.delete("/api/career_paths/:id", async (req, res) => {
  try {
    await CareerPath.findByIdAndDelete(req.params.id);
    res.json({ message: "Career path deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


/**/

// --- TEST SCHEMA ---
const testSchema = new mongoose.Schema({
  name: String
});
const Test = mongoose.model("Test", testSchema);

// --- QUESTIONS SCHEMA ---
const questionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  question: String,
  options: [String],
  answer: String,
});
const Question = mongoose.model("Question", questionSchema);

// --- ROUTES ---

// ✅ Get all tests
app.get("/api/tests", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Add new test
app.post("/api/tests", async (req, res) => {
  try {
    const newTest = new Test(req.body);
    await newTest.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete test
app.delete("/api/tests/:id", async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    await Question.deleteMany({ testId: req.params.id });
    res.json({ msg: "Test deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});




/* ==========================
   🔹 Test Routes
========================== */
// Get all tests
app.get("/api/tests", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Add new test
app.post("/api/tests", async (req, res) => {
  try {
    const newTest = new Test(req.body);
    await newTest.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Delete test
app.delete("/api/tests/:id", async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    await Question.deleteMany({ testId: req.params.id });
    res.json({ msg: "Test deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Update test
app.put("/api/tests/:id", async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTest);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

/* ==========================
   🔹 Question Routes
========================== */

// Get all questions for a test
app.get("/api/tests/:testId/questions", async (req, res) => {
  try {
    const questions = await Question.find({ testId: req.params.testId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Add a new question to a test
app.post("/api/tests/:testId/questions", async (req, res) => {
  try {
    const { question, options, answer } = req.body;
    const newQuestion = new Question({
      testId: req.params.testId,
      question,
      options,
      answer,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Update a question
app.put("/api/questions/:id", async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// Delete a question
app.delete("/api/questions/:id", async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ msg: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

/* ==========================
   🔹 Root
========================== */
app.get("/", (req, res) => {
  res.send("🚀 Career Guidance API is running!");
});

/* ==========================
   🔹 Course Schema & Model
========================== */
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Course title
  course: { type: String },                // Category/type
  duration: { type: String },              // Optional: Duration
  website: { type: String },               // Website link
  image: { type: String },                 // Image URL
});

const Course = mongoose.model("Course", courseSchema);


/* ==========================
   🔹 Courses Routes
========================== */

// ✅ Get all courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Add a new course
app.post("/api/courses", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Update a course
app.put("/api/courses/:id", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCourse);
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});

// ✅ Delete a course
app.delete("/api/courses/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", err });
  }
});



// -------------------
// Start Server
// -------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



