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

/* ==========================
   ✅ Start Server
========================== */
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
